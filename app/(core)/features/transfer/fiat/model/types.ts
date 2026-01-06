export type FormValues = {
  senderAccount: SelectOption<AccountMeta> | null;
  recipientAccount: string;
  amount: string;
  currency: SelectOption | null;
};

type SelectOption<TMeta = unknown> = {
  label: string;
  value: string;
  meta?: TMeta;
};

export type AccountMeta = {
  total: number;
};
