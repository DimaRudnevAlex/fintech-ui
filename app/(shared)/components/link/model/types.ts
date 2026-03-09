import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary' | 'neutral';
type ButtonVariant = 'default' | 'outline' | 'subtle';

export type BaseLinkProps = {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & React.ComponentProps<typeof Link>;
