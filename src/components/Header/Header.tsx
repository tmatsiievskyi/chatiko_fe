import { IHeaderProps } from './_interfaces';
import classNames from 'classnames';
import { Text } from '@/UI';

export const Header = ({ title, signOutHandler, className }: IHeaderProps) => {
  return (
    <header
      className={classNames([
        'relative flex justify-between p-2 border border-gray-100',
        className,
      ])}
    >
      <Text size="base" variant="dark" as="p">
        Text Component
      </Text>
      {title && (
        <Text size="base" variant="dark" as="h3">
          {title}
        </Text>
      )}
      <button onClick={() => signOutHandler()}>SignOut</button>
    </header>
  );
};
