
import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";
import { TripDetail } from "./Pages/TripDetail";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import SvgComponent from "./Pages/Homepage/Map";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/trips",
        element: <Trips />
    },
    {
        path: "/guides",
        element: <Guides />
    },
    {
        path: "/trip",
        element: <TripDetail />
    },
    {
        path: "/planyourtrip",
        element: <Plantrip />
    },
    {
        path: "/map",
        element: <SvgComponent />
    },

  ]);
  

ReactDOM.createRoot(document.getElementById("app")).render( <RouterProvider router={router} />);
