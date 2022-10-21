import { createBrowserRouter } from "react-router-dom";

import Error from "../components/err/error";
import Home from "../components/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    }
])