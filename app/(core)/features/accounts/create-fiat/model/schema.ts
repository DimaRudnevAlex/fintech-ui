import { z } from 'zod';

export const schema = z.object({
  currency: z.object(
    {
      value: z.string().nonempty({ message: 'Обязательное поле' }),
      label: z.string().nonempty({ message: 'Обязательное поле' }),
    },
    { message: 'Обязательное поле' },
  ),
});

export type FormValues = z.infer<typeof schema>;
