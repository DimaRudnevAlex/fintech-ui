import { ComponentProps } from 'react';

export type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  errors?: string[];
  id?: string;
} & Omit<ComponentProps<'input'>, 'onChange'>;
