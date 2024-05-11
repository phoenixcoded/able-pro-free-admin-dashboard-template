import { lazy } from 'react';

// project-imports
import MainLayout from 'layout/Dashboard/index';
import Loadable from 'components/Loadable';

// render - data display components
const Typography = Loadable(lazy(() => import('pages/components-overview/typography')));

// render - utils components page
const Color = Loadable(lazy(() => import('pages/components-overview/color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/shadows')));

// ==============================|| COMPONENTS ROUTES ||============================== //

const ComponentsRoutes = {
  path: 'components-overview',
  element: <MainLayout />,
  children: [
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadows',
      element: <Shadow />
    }
  ]
};

export default ComponentsRoutes;
