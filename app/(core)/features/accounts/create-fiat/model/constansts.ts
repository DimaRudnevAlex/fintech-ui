type FormValues = {
  currency: {
    label: string;
    value: string;
  } | null;
};

export const defaultValues: FormValues = {
  currency: null,
};
