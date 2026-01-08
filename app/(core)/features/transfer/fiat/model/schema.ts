import { useTranslations } from 'next-intl';

import { z } from 'zod';

import { parseAmount } from '@/(core)/features/transfer/fiat/utils/parse-amount';

export const transferSchema = (t: ReturnType<typeof useTranslations>) => {
  return z
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

      recipientAccount: z.string().min(1, t('errors.enterAccount')),

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
          message: t('errors.selectDebitAccount'),
          code: z.ZodIssueCode.custom,
        });
        return; // ❗ дальше НЕ проверяем
      }

      if (!data.amount) {
        ctx.addIssue({
          path: ['amount'],
          message: t('errors.enterAmount'),
          code: z.ZodIssueCode.custom,
        });
        return;
      }

      if (!data.currency) {
        ctx.addIssue({
          path: ['currency'],
          message: t('errors.chooseCurrency'),
          code: z.ZodIssueCode.custom,
        });
      }

      // 2️⃣ Проверка суммы
      const amountCents = parseAmount(data.amount);
      if (!amountCents) {
        ctx.addIssue({
          path: ['amount'],
          message: t('errors.enterCorrectAmount'),
          code: z.ZodIssueCode.custom,
        });
        return;
      }

      // 3️⃣ Проверка баланса
      const balanceCents = Math.round(data.senderAccount.meta.total * 100);

      if (amountCents > balanceCents) {
        ctx.addIssue({
          path: ['amount'],
          message: t('errors.insufficientFundsInAccount'),
          code: z.ZodIssueCode.custom,
        });
      }
    });
};
