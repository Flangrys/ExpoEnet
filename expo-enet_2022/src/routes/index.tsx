import { createBrowserRouter } from "react-router-dom";
import AppEconomia from "../components/AppEconomia";
import AppIngles from "../components/AppIngles";

import Error from "../components/err/error";
import Home from "../components/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: '/economia',
        element: <AppEconomia/>
    },
    {
        path: '/ingles',
        element: <AppIngles/>
    }
])