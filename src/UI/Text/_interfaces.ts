import { PropsWithChildren } from 'react';

type TTextType = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type TTextVariant = 'dark' | 'light' | 'primary';
type TTextAs = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ITextProps extends PropsWithChildren {
  size?: TTextType;
  variant?: TTextVariant;
  as?: TTextAs;
  className?: string;
}
