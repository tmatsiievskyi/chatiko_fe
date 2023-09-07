import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
// import { AuthMiddleware } from '../middleware';
import { FullScreenLoader } from '@/components';
import { Layout } from '@/containers/Layout';

interface ICompProps extends JSX.IntrinsicAttributes {
  type?: string;
}

const Loadable =
  (Component: React.ComponentType<unknown>) => (props: ICompProps) => (
    <Suspense fallback={<FullScreenLoader />}>
      <Component {...props} />
    </Suspense>
  );

const DashboardPage = Loadable(lazy(() => import('@/pages/Dashboard.page')));
const NotFoundPage = Loadable(lazy(() => import('@/pages/NotFound.page')));
const SignInPage = Loadable(lazy(() => import('@/pages/auth/SignIn.page')));
const SignUpPage = Loadable(lazy(() => import('@/pages/auth/SignUp.page')));

const notFoundRoute: RouteObject = {
  path: '*',
  element: <NotFoundPage />,
};

const authRoutes: RouteObject = {
  path: '*',
  children: [
    {
      path: 'auth/sign_in',
      element: <SignInPage />,
    },
    {
      path: 'auth/sign_up',
      element: <SignUpPage />,
    },
  ],
};

const protectedRoutes: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [{ index: true, element: <DashboardPage /> }],
};

export const routes: RouteObject[] = [
  notFoundRoute,
  authRoutes,
  protectedRoutes,
];
