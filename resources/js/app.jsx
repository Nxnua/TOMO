import "../css/app.css";
import { useState } from "react";

import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";
import Map from "./Pages/Homepage/Map";
import Movement from "./components/bannerSVG";
import { TripDetail } from "./Pages/TripDetail";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/trips",
        element: <Trips />
    }
  ]);
  

ReactDOM.createRoot(document.getElementById("app")).render( <RouterProvider router={router} />);
