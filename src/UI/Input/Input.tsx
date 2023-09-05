import { forwardRef, useId } from 'react';
import { IInputProps } from './_interfaces';
import classNames from 'classnames';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      name,
      label,
      type,
      size = 'base',
      required,
      valid,
      error,
      rounded = 'lg',
      placeholder,
      className,
      classNameLabel,
      autocomplete = 'off',
      disabled,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const styles = {
      base: 'inline-flex w-full rounded-lg leading-none transition-colors ease-in-out  text-dark bg-gray-50 border  hover:border-primary/20 focus:outline-none focus:border-primary/80 focus:ring-primary/20 focus:ring-2 focus:ring-opacity-30',
      state: {
        normal: 'placeholder-gray/50 border-gray-200 focus:ring-primary-100',
        error:
          'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red hover:border-red focus:border-red focus:ring-red-700',
        valid: 'border-green-600 focus:ring-green-600',
        disabled: 'cursor-not-allowed bg-gray-100 shadow-inner text-gray-400',
      },
      size: {
        sm: 'p-1 text-sm',
        base: 'p-2 text-base',
        lg: 'p-3 text-lg',
      },
      rounded: {
        none: null,
        sm: 'rounded-sm',
        base: 'rounded-md',
        lg: 'rounded-lg',
      },
    };

    return (
      <div className={classNames(['relative'])}>
        {label && (
          <label className={classNameLabel} id={id}>
            {label} {required && '*'}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autocomplete}
          className={classNames([
            styles.base,
            className,
            size && styles.size[size],
            rounded && styles.rounded[rounded],
            error ? styles.state.error : styles.state.normal,
            valid ? styles.state.valid : styles.state.normal,
            disabled && styles.state.disabled,
          ])}
          {...rest}
        />
      </div>
    );
  }
);
