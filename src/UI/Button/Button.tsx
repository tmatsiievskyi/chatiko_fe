import { forwardRef } from 'react';
import { IButtonProps, TButtonSize, TButtonType } from './_interfaces';
import classNames from 'classnames';

const types: { [key in TButtonType]: string } = {
  primary: 'bg-primary text-light hover:bg-primary/90',
  danger: 'bg-red text-light hover:bg-primary/90',
  dark: 'bg-dark text-light hover:bg-primary/90',
  light: 'bg-light text-dark hover:bg-primary/90',
};

const sizes: { [key in TButtonSize]: string } = {
  sm: 'px-4 py-1 text-base',
  base: 'px-8 py-1 text-lg',
  lg: 'px-10 py-2 text-xl',
};

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    { type = 'primary', size = 'base', disabled, className, children, onClick },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames([
          'rounded-lg',
          types[type],
          sizes[size],
          className,
        ])}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
