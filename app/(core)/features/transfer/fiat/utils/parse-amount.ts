export const parseAmount = (value: string): number | null => {
  const v = Number(value.replace(',', '.'));
  if (Number.isNaN(v) || v <= 0) return null;
  return Math.round(v * 100);
};
