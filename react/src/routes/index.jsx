import { createBrowserRouter } from 'react-router-dom';

// project-imports
import ComponentsRoutes from './ComponentsRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTES RENDER ||============================== //

const router = createBrowserRouter([ComponentsRoutes, MainRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
