import { Spinner } from '@/UI';

export const FullScreenLoader = () => {
  return (
    <div className="fixed w-full h-full bg-semiDarkTr z-50">
      <Spinner />
    </div>
  );
};
