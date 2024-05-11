import { lazy } from 'react';

// project-imports
import MainLayout from 'layout/Dashboard/index';
import CommonLayout from 'layout/CommonLayout/index';
import Loadable from 'components/Loadable';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// pages routing
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <DashboardDefault />
        },
        {
          path: 'dashboard',
          element: <DashboardDefault />
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        }
      ]
    },
    {
      path: '/auth',
      element: <CommonLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        }
      ]
    }
  ]
};

export default MainRoutes;
