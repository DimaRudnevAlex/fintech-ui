import { z } from 'zod';

const schemeUserEmail = z.email();

const schemeUserType = z.object({
  user_type: z.object(
    { value: z.string(), label: z.string() },
    { message: 'Выберите тип аккаунта' },
  ),
  user_names: z.object({
    first_name: z.string().trim().nonempty({ message: 'Обязательное поле' }),
    last_name: z.string().trim().nonempty({ message: 'Обязательное поле' }),
    middle_name: z.string().trim().nonempty({ message: 'Обязательное поле' }),
  }),
});

const schemeUserContacts = z.object({
  user_birth_info: z.object({
    birth_date: z.date({ message: 'Выберите дату' }),
    birth_place: z.string().trim().nonempty({ message: 'Обязательное поле' }),
  }),
  user_contacts: z
    .object({
      phone: z.string().trim().nonempty({ message: 'Обязательное поле' }),
      additional_email: z
        .string()
        .trim()
        .nonempty({ message: 'Обязательное поле' }),
      messenger_name: z
        .string()
        .trim()
        .nonempty({ message: 'Обязательное поле' }),
      messenger_type: z.object(
        { value: z.string() },
        { message: 'Выберите мессенджер' },
      ),
    })
    .superRefine((data, ctx) => {
      const result = schemeUserEmail.safeParse(data.additional_email);
      console.log(result);
      if (!result.success) {
        ctx.addIssue({
          path: ['additional_email'],
          message: 'Некорректная почта',
          code: z.ZodIssueCode.custom,
        });
      }
    }),
});

const schemeIdentityDocument = z.object({
  user_identity_document: z.object({
    document_type: z.object(
      { value: z.string() },
      { message: 'Выберите тип документа' },
    ),
    document_number: z
      .string()
      .trim()
      .nonempty({ message: 'Обязательное поле' }),
    issuing_country: z
      .string()
      .trim()
      .nonempty({ message: 'Обязательное поле' }),
    expiry_date: z.date({ message: 'Выберите дату' }),
  }),
});

const schemeUserAddress = z.object({
  user_address: z.object({
    country_code: z.string().trim().nonempty({ message: 'Обязательное поле' }),
    city: z.string().trim().nonempty({ message: 'Обязательное поле' }),
    postal_code: z.string().trim().nonempty({ message: 'Обязательное поле' }),
    street_address: z
      .string()
      .trim()
      .nonempty({ message: 'Обязательное поле' }),
    state_region: z.string().trim().nonempty({ message: 'Обязательное поле' }),
  }),
});

const schemeUserTaxInfo = z.object({
  user_tax_info: z.object({
    residence_country: z
      .string()
      .trim()
      .nonempty({ message: 'Обязательное поле' }),
    tax_id: z.string().trim().nonempty({ message: 'Обязательное поле' }),
    tax_id_type: z.string().trim().nonempty({ message: 'Обязательное поле' }),
  }),
});

const schemes = {
  0: schemeUserType,
  1: schemeUserContacts,
  2: schemeIdentityDocument,
  3: schemeUserAddress,
  4: schemeUserTaxInfo,
};

export function getScheme(step: 0 | 1 | 2 | 3 | 4) {
  return schemes[step];
}
