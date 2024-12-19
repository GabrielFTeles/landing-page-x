import { DefaultLayout } from "@/layouts/default-layout";
import { Contact } from "@/pages/contact";
import { Home } from "@/pages/home";
import { PlansPage } from "@/pages/plans";
import { PrivacyPolicy } from "@/pages/privacy-policy";
import { TermsOfUse } from "@/pages/terms-of-use";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contato",
        element: <Contact />,
      },
      {
        path: "/planos",
        element: <PlansPage />,
      },
      {
        path: "/termos-de-uso",
        element: <TermsOfUse />,
      },
      {
        path: "/politica-de-privacidade",
        element: <PrivacyPolicy />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
