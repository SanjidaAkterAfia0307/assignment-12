import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/HomePage/Home/Home";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]
    }
])