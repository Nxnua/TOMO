import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContextProvider from "./contexts";
import MainLayout from "./components/layout";
import HomePage from "./pages/home";
import { GuideDetail } from "./pages/guide";
import { TripDetail } from "./pages/trip";
import Trips from "./pages/trips";
import { Guides } from "./pages/Guides";
import Accordion from "./components/layout/faq/faqClose";
import FaqPage from "./pages/faq";
import Reviews from "./pages/reviews";
import Home1 from "./admin1/pages1/home1";
import Single from "./admin1/pages1/Single";
import Feedback from "./pages/feedback";
import { Profile } from "./pages/Profile";
import  Notification  from "./components/profile/Notification";
import SvgComponent from "./components/Map";
import { Prefer } from "./pages/prefer";
import { Days } from "./pages/days";
import Plantrip from "./pages/PlanTrip";
import NotificationPage from "./components/profile/Notification";
import AdminLayout from "./components/layout/adminLayout";
import { Profile1 } from "./admin1/pages1/Profile";
import { Travel } from "./admin1/pages1/travel";
import { Orders } from "./admin1/pages1/Orders";
import { Logs } from "./admin1/pages1/Logs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/guide/:slug",
                element: <GuideDetail />,
            },
            {
                path: "/trip/:slug",
                element: <TripDetail />,
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
                path: "/reviews",
                element: <Reviews />,
            },
            {
                path: "/faq",
                element: <FaqPage />,
            },
            {
                path: "/faqq",
                element: <Accordion />,
            },
            {
                path: "/notification",
                element: <NotificationPage />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Home1 />
            },
            {
                path: "users",
                element: <Single />
            },
            {
                path: "profile",
                element: <Profile1 />
            },
            {
                path: "travel",
                element: <Travel />
            },
            {
                path: "logs",
                element: <Logs />
            },
            {
                path: "orders",
                element: <Orders />
            },
        ]
    }
   
]);

export default function App() {
    return (
        <MainContextProvider>
            <RouterProvider router={router} />
        </MainContextProvider>
    );
}
