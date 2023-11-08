import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";
import Map from "./components/Map";
import Movement from "./components/bannerSVG";
import Feedback from "./Pages/feedback";

import { TripDetail } from "./Pages/TripDetail";
import { TripDetail2 } from "./Pages/TripDetail2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SvgComponent from "./components/Map";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/trips",
        element: <Trips />,
    },
    {
        path: "/guides",
        element: <Guides />,
    },
    {
        path: "/trip",
        element: <TripDetail />,
    },
    {
        path: "/trip2",
        element: <TripDetail2 />,
    },
    {
        path: "/planyourtrip",
        element: <Plantrip />,
    },
    {
        path: "/map",
        element: <SvgComponent />,
    },
    {
        path: "/feedback",
        element: <Feedback />,
    },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={router} />
);
