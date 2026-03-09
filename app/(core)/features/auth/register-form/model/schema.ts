import { z } from 'zod';

export const schema = z
  .object({
    email: z.string().nonempty({ message: 'Обязательное поле' }),
    firstName: z.string().nonempty({ message: 'Обязательное поле' }),
    middleName: z.string().nonempty({ message: 'Обязательное поле' }),
    lastName: z.string().nonempty({ message: 'Обязательное поле' }),
    password: z.string().min(6, { message: 'Минимум 6 символов' }),
    confirmPassword: z.string().min(6, { message: 'Минимум 6 символов' }),
  })
  .superRefine((data, ctx) => {
    if (
      data.password &&
      data.confirmPassword &&
      data.confirmPassword.length > 5 &&
      data.password !== data.confirmPassword
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Пароли не совпадают',
        path: ['confirmPassword'],
      });
    }
  });
