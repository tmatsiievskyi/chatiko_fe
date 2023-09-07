import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const signOutHandler = () => {};
  return (
    <>
      <Header signOutHandler={signOutHandler} />
      <Outlet />
    </>
  );
};
