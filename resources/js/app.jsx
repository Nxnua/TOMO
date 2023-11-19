import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";

import Feedback from "./Pages/feedback";

import { TripDetail } from "./Pages/TripDetail";
import { GuideDetail } from "./Pages/guideDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SvgComponent from "./components/Map";
import { Profile } from "./Pages/Profile";

import  Notif  from "./components/Notif";


import { ThemeContextProvider } from "./components/darkmode/states";



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
        path: "/trips/trip",
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
        element: <Profile />,
    },
    {
        path: "/Notif",
        element: <Notif />,
    },

]);

ReactDOM.createRoot(document.getElementById("app")).render(
    <ThemeContextProvider>
        <RouterProvider router={router} />
    </ThemeContextProvider>
);
