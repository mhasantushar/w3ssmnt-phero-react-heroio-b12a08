import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Errorinfo from "../pages/Errorinfo";
import Lspinner from "../compos/Lspinner";
import Homepage from "../pages/Homepage";
import Allapps from "../pages/Allapps";
import Installs from "../pages/Installs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <Errorinfo />,
    hydrateFallbackElement: <Lspinner />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/apps",
        element: <Allapps />,
      },
      {
        path: "/installs",
        element: <Installs />,
      },
      {
        path: "/installation",
        element: <Installs />,
      },
    ],
  },
  {
    path: "*",
    element: <Errorinfo />,
  },
]);

export default router;
