import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { Main } from '@/pages';

import { ROUTES } from './routes';
import { URLS } from './urls';

const { AUTH, CONSOLE, ERROR } = ROUTES;

export const ROUTE_LIST: RouteObject[] = [
  {
    path: '/',
    element: <Main />
    // element: <Navigate to={URLS.AUTH.SIGN_IN} replace />,
  },
  {
    path: `/${AUTH.DOMAIN}`,
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      { path: AUTH.SIGN_UP, element: <div /> },
      { path: AUTH.SIGN_UP_MEMBER_CONFIRM, element: <div /> },
      { path: AUTH.SIGN_UP_MEMBER_PASSWORD, element: <div /> },
      { path: AUTH.SIGN_IN, element: <div /> },
      { path: AUTH.RESET_PASSWORD, element: <div /> },
      {
        path: AUTH.LOGOUT,
        children: [
          { path: '', element: <div /> },
          { path: ':type', element: <div /> },
        ],
      },
      { path: '*', element: <Navigate to={URLS.AUTH.SIGN_IN} replace /> },
    ],
  },
  {
    path: `/${CONSOLE.DOMAIN}`,
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      { path: CONSOLE.MYPAGE, element: <div /> },
      { path: CONSOLE.HOME, element: <div /> },
      { path: CONSOLE.TRANSACTION, element: <div /> },
      { path: CONSOLE.WITHDRAW, element: <div /> },
      {
        path: CONSOLE.TEAM,
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          { path: CONSOLE.TEAM_INFO, element: <div /> },
          { path: CONSOLE.TEAM_MEMBER, element: <div /> },
          { path: CONSOLE.TEAM_SECURITY, element: <div /> },
          { path: CONSOLE.TEAM_LOG, element: <div /> },
        ],
      },
      {
        path: `${CONSOLE.WALLET}/:walletId`,
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          { path: CONSOLE.WALLET_ASSETS, element: <div /> },
          { path: CONSOLE.WALLET_ADDRESS, element: <div /> },
          { path: CONSOLE.WALLET_PERMISSION, element: <div /> },
          { path: CONSOLE.WALLET_SETTING, element: <div /> },
        ],
      },
      { path: '*', element: <Navigate to={URLS.CONSOLE.HOME} replace /> },
    ],
  },
  {
    path: `/${ERROR.DOMAIN}`,
    children: [
      { path: '', element: <div /> },
      { path: ':type', element: <div /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/error/404' replace />,
  },
];
