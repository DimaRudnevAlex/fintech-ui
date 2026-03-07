import { z } from 'zod';

export const schema = z.object({
  login: z.string().nonempty({ message: 'Обязательное поле' }),
  password: z.string().nonempty({ message: 'Обязательное поле' }),
});
