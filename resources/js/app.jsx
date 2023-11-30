import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContextProvider from "./contexts";
import MainLayout from "./components/layout";
import HomePage from "./pages/home";
import { GuideDetail } from "./pages/guide";
import { TripDetail } from "./pages/trip";

function Test() {
    return <div>Home</div>;
}

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
        ],
    },
]);

export default function App() {
    return (
        <MainContextProvider>
            <RouterProvider router={router} />
        </MainContextProvider>
    );
}
