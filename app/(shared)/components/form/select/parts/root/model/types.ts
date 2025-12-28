import { SelectProps } from '../../../model/types';

export type SelectRootProps = Omit<SelectProps, 'placeholder' | 'isLoading'> & {
  children: React.ReactNode;
};
