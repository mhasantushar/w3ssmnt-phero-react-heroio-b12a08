import React from "react";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Errorinfo from "../pages/Errorinfo";
import Lspinner from "../compos/Lspinner";
import Homepage from "../pages/Homepage";

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
        path:'/homepage',
        element: <Homepage/>,
      },
    ],
  },
  {
    path: '*',
    element: <Errorinfo/>
  }
]
);

export default router;
