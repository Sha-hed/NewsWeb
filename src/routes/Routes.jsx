import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { element } from "prop-types";
import Demo from "../pages/Demo/Demo";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader : ()=>fetch('./news.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
               path : '/category/:id',
               element: <Demo></Demo>
            },
            {
                path : '/anews/:id',
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
            }
        ]
    }
]);

export default router;