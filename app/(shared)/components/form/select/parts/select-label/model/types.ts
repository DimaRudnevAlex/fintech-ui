import { SelectProps } from '../../../model/types';

export type SelectLabelProps = Pick<SelectProps, 'label'> & { id: string };
