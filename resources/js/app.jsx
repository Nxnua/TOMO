import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip/PlanTrip";
import {Days} from "./Pages/PlanTrip/days";
import { Prefer } from "./Pages/PlanTrip/prefer";
import Trips from "./Pages/Agency/Trips";
import { Guides } from "./Pages/Guide/Guides";
import Map from "./components/Map";
import Movement from "./components/banner/bannerSVG";
import Feedback from "./Pages/feedback";
import Faq from "./Pages/faq";
import Faqclose from "./components/faq/faqClose";
import Home1 from "./admin1/pages1/home1";
import { Travel } from "./admin1/pages1/travel";
//import App from "./admin1/App";
import Single from "./admin1/pages1/Single";
import { GuideDetail } from "./Pages/Guide/GuideDetail";
import Reviews from "./Pages/Reviews";
import { TripDetail } from "./Pages/Agency/TripDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SvgComponent from "./components/Map";
import { Profile } from "./Pages/Profile";
import { ThemeContextProvider } from "./components/darkmode/states";
import { Orders } from "./admin1/pages1/Orders";
import { Logs } from "./admin1/pages1/Logs";
import { Profile1 } from "./admin1/pages1/Profile";



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
        path: "/planyourtrip/days",
        element: <Days />,
    },
    {
        path: "/plantrip/prefer",
        element: <Prefer />,
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
        path: "/admin/Logs",
        element: <Logs />,
    },
    {
        path: "/admin/Profile",
        element: <Profile1 />,
    },
    {
        path: "/reviews",
        element: <Reviews />,
    }, 
    {
        path: "/admin/travel",
        element: <Travel />,
    },
    {
        path: "/admin/Orders",
        element: <Orders />,
    },
    {
        path: "/faq",
        element: <Faq />,
    },
    {
        path: "/faqq",
        element: <Faqclose />,
    },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
    <ThemeContextProvider>
        <RouterProvider router={router} />
    </ThemeContextProvider>
);