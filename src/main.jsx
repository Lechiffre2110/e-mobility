import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./pages/error-page";
import Authors from "./pages/authors";
import Blog from "./pages/blog.jsx";
import Cars from "./pages/cars.jsx";
import Documentation from "./pages/documentation.jsx";
import LandingPage from "./pages/landing-page.jsx";
import DataHub from "./pages/datahub";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Auth0Provider } from "@auth0/auth0-react";

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
        path: "/datahub",
        element: <DataHub />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-yokx85jgh6jg1efj.eu.auth0.com"
      clientId="oYYkAM0wPimXi0hZ6wXyC733Kn0fNheU"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Theme>
        <PrimeReactProvider>
          <RouterProvider router={router} />
        </PrimeReactProvider>
      </Theme>
    </Auth0Provider>
  </React.StrictMode>
);
