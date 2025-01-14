import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import { adminBasePath, homeBasePath } from './routerPathes';
import HomePage from './pages/home';
import AdminsPage from './pages/admins';
import LoginPage from './pages/login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: homeBasePath,
        index: true,
        element: <HomePage />,
      },
      {
        path: adminBasePath,
        index: true,
        element: <AdminsPage />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
]);

export default router;
