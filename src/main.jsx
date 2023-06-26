import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import ErrorPage from "./pages/error-page";
import Authors from "./pages/authors";
import Blog from './pages/blog.jsx';
import Cars from './pages/cars.jsx';
import Documentation from './pages/documentation.jsx';
import LandingPage from './pages/landing-page.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/documentation",
        element: <Documentation />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
