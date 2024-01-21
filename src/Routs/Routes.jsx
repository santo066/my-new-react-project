import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import User from "../Pages/User/User";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/event/:id',
                element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader:()=>fetch('/news.json')
            },
            { 
                path:'/user',
                element:<PrivateRoute><User></User></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element: <Registation></Registation>
            }
        ]
    }
])
export default routes;