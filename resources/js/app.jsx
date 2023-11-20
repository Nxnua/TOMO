import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip";
import Trips from "./Pages/Trips";
import { Guides } from "./Pages/Guides";
import Map from "./components/Map";
import Movement from "./components/banner/bannerSVG";
import Feedback from "./Pages/feedback";
import Faq from "./Pages/faq";
import Faqclose from "./Pages/faqClose";

import { TripDetail } from "./Pages/TripDetail";
import { GuideDetail } from "./Pages/GuideDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SvgComponent from "./components/Map";
import Flights from "./Pages/flights";
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
        path: "/faq",
        element: <Faq />,
    },
    {
        path: "/faqq",
        element: <Faqclose />,
    },
    {
        path: "/flights",
        element: <Flights />,
    },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
    <ThemeContextProvider>
        <RouterProvider router={router} />
    </ThemeContextProvider>
);
