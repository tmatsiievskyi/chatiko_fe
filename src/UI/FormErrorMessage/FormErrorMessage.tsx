import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface IFormErrorMessage extends PropsWithChildren {
  className?: string;
}

export const FormErrorMessage = ({
  children,
  className,
}: IFormErrorMessage) => {
  return (
    <p
      className={classNames(
        ' font-comfortaa text-sm text-left block text-red',
        className
      )}
    >
      {children}
    </p>
  );
};
