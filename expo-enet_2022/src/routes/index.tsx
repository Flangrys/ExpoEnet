import { createBrowserRouter } from "react-router-dom";

import AppEconomia from "../app/AppEconomia";
import AppIngles from "../app/AppIngles";
import AppMemoGame from "../app/AppInglesG1";

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
    {
        path: '/ingles',
        element: <AppIngles/>,
        children: [
            {
                path: 'memo-game',
                element: <AppMemoGame/>
            },
            {
                path: 'letter-soup',
                element: <></>
            }
        ]
    }
])