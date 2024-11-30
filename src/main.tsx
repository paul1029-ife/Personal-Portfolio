import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App'; // Assuming you have an App component
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';

const browserRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>This page does not exist😭🙏</div>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/articles', element: <ArticlePage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/projects', element: <ProjectsPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={browserRoute} />
  </StrictMode>,
);
