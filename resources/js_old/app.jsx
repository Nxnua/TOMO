import ReactDOM from "react-dom/client";
import Home from "./Pages/Homepage/Home";
import Plantrip from "./Pages/PlanTrip/PlanTrip";
import { Days } from "./Pages/PlanTrip/days";
import { Prefer } from "./Pages/PlanTrip/prefer";
import Trips from "./Pages/Agency/Trips";
import { Guides } from "./Pages/Guide/Guides";
import Feedback from "./Pages/feedback";
import Faq from "./Pages/faq";
import Faqclose from "./components/faq/faqClose";
import Home1 from "./admin1/pages1/home1";
//import App from "./admin1/App";
import Single from "./admin1/pages1/Single";
import { GuideDetail } from "./Pages/Guide/GuideDetail";
import Reviews from "./Pages/Reviews";
import { TripDetail } from "./Pages/Agency/TripDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SvgComponent from "./components/Map";
import { Profile } from "./Pages/Profile";
import MainContextProvider from "./contexts";

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
        path: "/reviews",
        element: <Reviews />,
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
    <MainContextProvider>
        <RouterProvider router={router} />
    </MainContextProvider>
);

export default function App() {
    return (
        <MainContextProvider>
            <RouterProvider router={router} />
        </MainContextProvider>
    );
}
