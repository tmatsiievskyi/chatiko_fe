import { useRoutes } from 'react-router-dom';
import { routes } from '@/global/router';

export const App = () => {
  const content = useRoutes(routes);
  return <>{content}</>;
};
