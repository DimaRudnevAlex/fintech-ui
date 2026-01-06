export const calculateTotal = (
  amount: string,
  commissionPercent: number | null,
): number | null => {
  const value = Number(amount.replace(',', '.'));

  if (isNaN(value) || !commissionPercent) {
    return null;
  }

  const commission = (value * commissionPercent) / 100;
  return value + commission;
};
