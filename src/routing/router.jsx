import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Errorinfo from "../pages/Errorinfo";
import Spinner from "../compos/Spinner";
import Loader from "../compos/Loader";
import Homepage from "../pages/Homepage";
import Allapps from "../pages/Allapps";
import Installed from "../pages/Installed";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorinfo />,
    hydrateFallbackElement: <Loader />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/apps",
        element: <Allapps />,
      },
      {
        path: "app/:appid",
        element: <AppDetails />,
      },
      {
        path: "/installation",
        element: <Installed />,
      },
    ],
  },
  {
    path: "*",
    element: <Errorinfo />,
  },
]);

export default router;
