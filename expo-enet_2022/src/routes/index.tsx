import { createBrowserRouter } from "react-router-dom";

import AppEconomia from "../app/AppEconomia";

import ErrorView from "../views/ErrorView";
import HomeView from "../views/HomeView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView/>,
        errorElement: <ErrorView/>
    },
    {
        path: '/economia',
        element: <AppEconomia/>
    },
])