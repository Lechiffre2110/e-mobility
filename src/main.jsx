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
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import deTranslation from "./locales/de.json";
import { useTranslation } from "react-i18next";

const TranslationWrapper = () => {
  const { t } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage t={t}/>,
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
          element: <Cars t={t}/>,
        },
        {
          path: "/documentation",
          element: <Documentation />,
        },
        {
          path: "/datahub",
          element: <DataHub t={t}/>,
        },
        {
          path: "/",
          element: <LandingPage t={t}/>,
        },
      ],
    },
  ]);

  return (
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
}


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    de: { translation: deTranslation },
  },
  lng: "de",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(<TranslationWrapper />);
