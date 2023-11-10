import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";
import Map from "./components/Map";
import Movement from "./components/bannerSVG";
import Feedback from "./Pages/feedback";

import { TripDetail } from "./Pages/TripDetail";
import { GuideDetail } from "./Pages/guideDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SvgComponent from "./components/Map";
import { Profile } from "./Pages/Profile";


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
        path: "/guide",
        element: <GuideDetail />,
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
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/feedback",
        element: <Feedback />,
    },
]);


ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={router} />
);
