// router.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import Download from './components/downloads/download';
import About from './components/about/about';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/download', element: <Download /> },
  { path: '/about', element: <About /> },
]);

export default router;
