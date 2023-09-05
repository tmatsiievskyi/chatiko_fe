import { PropsWithChildren } from 'react';

export type TButtonType = 'primary' | 'dark' | 'light' | 'danger';
export type TButtonSize = 'sm' | 'base' | 'lg';

export interface IButtonProps extends PropsWithChildren {
  size: TButtonSize;
  type: TButtonType;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}
