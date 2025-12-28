import { SelectProps } from '../../../model/types';

export type SelectContentProps = Pick<SelectProps, 'options'> & {
  children: React.ReactNode;
};
