import { z } from 'zod';

import { parseAmount } from '@/(core)/features/transfer/fiat/utils/parse-amount';

export const transferSchema = z
  .object({
    senderAccount: z
      .object({
        label: z.string(),
        value: z.string(),
        meta: z.object({
          total: z.number().nonnegative(),
        }),
      })
      .nullable(),

    recipientAccount: z.string().min(1, 'Введите номер счета'),

    amount: z.string(),

    currency: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .nullable(),
  })
  .superRefine((data, ctx) => {
    // 1️⃣ Сначала — выбран ли счет
    if (!data.senderAccount) {
      ctx.addIssue({
        path: ['senderAccount'],
        message: 'Выберите счет списания',
        code: z.ZodIssueCode.custom,
      });
      return; // ❗ дальше НЕ проверяем
    }

    if (!data.amount) {
      ctx.addIssue({
        path: ['amount'],
        message: 'Введите сумму',
        code: z.ZodIssueCode.custom,
      });
      return;
    }

    if (!data.currency) {
      ctx.addIssue({
        path: ['currency'],
        message: 'Введите валюту',
        code: z.ZodIssueCode.custom,
      });
    }

    // 2️⃣ Проверка суммы
    const amountCents = parseAmount(data.amount);
    if (!amountCents) {
      ctx.addIssue({
        path: ['amount'],
        message: 'Введите корректную сумму',
        code: z.ZodIssueCode.custom,
      });
      return;
    }

    // 3️⃣ Проверка баланса
    const balanceCents = Math.round(data.senderAccount.meta.total * 100);

    if (amountCents > balanceCents) {
      ctx.addIssue({
        path: ['amount'],
        message: 'Недостаточно средств на счете',
        code: z.ZodIssueCode.custom,
      });
    }
  });
