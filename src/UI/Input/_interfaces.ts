import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

export type TInputSize = 'sm' | 'base' | 'lg';
export type TInputType = 'text' | 'email' | 'password' | 'number';
export type TInputRounded = 'none' | 'sm' | 'base' | 'lg';

export interface IInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  > {
  name: string;
  label?: string;
  type: TInputType;
  size: TInputSize;
  required?: boolean;
  error?: boolean;
  valid?: boolean;
  rounded?: TInputRounded;
  className?: string;
  classNameLabel?: string;
  autocomplete?: string;
}
