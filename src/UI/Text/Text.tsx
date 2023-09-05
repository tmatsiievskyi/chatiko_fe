import { ITextProps } from './_interfaces';
import classNames from 'classnames';

export const Text = ({
  size = 'base',
  variant = 'dark',
  as = 'p',
  className,
  children,
}: ITextProps) => {
  const Tag = as;

  const variants: { [key in ITextProps['variant']]: string } = {
    dark: 'text-dark',
    light: 'text-light',
    primary: 'text-primary',
  };

  const sizes: { [key in ITextProps['size']]: string } = {
    xs: 'font-medium text-xs leading-normal',
    sm: 'font-medium text-sm leading-normal',
    base: 'font-medium text-base leading-normal',
    lg: 'font-medium text-lg leading-normal',
    xl: 'font-medium text-xl leading-normal',
  };

  return (
    <Tag className={classNames([sizes[size], variants[variant], className])}>
      {children}
    </Tag>
  );
};
