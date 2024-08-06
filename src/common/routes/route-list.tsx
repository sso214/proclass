import { Navigate, RouteObject } from 'react-router-dom';

import { Main } from '@/pages';

export const ROUTE_LIST: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
];
