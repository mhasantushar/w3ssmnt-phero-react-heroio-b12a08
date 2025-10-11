import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Errorinfo from "../pages/Errorinfo";
import Spinner from "../compos/Spinner";
import Loader from "../compos/Loader";
import Homepage from "../pages/Homepage";
import Allapps from "../pages/Allapps";
import Installs from "../pages/Installed";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    errorElement: <Errorinfo />,
    hydrateFallbackElement: <Loader/>,

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
