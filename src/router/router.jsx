import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App is the parent!
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/project/:id',
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;