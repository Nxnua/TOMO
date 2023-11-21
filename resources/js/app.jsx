import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";
import Reviews from "./Pages/Reviews";
import Feedback from "./Pages/feedback";
import Home1 from "./admin1/pages1/home1";
//import App from "./admin1/App";
import Single from "./admin1/pages1/Single";

import { TripDetail } from "./Pages/TripDetail";
import { GuideDetail } from "./Pages/guideDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SvgComponent from "./components/Map";
import { Profile } from "./Pages/Profile";
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
        path: "/feedback",
        element: <Feedback />,
    },
    {
        path: "/admin",
        element: <Home1 />,
    },
    {
        path: "/admin/users",
        element: <Single />,
    },
    {
        path: "/reviews",
        element: <Reviews />,
    },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
    <ThemeContextProvider>
        <RouterProvider router={router} />
    </ThemeContextProvider>
);