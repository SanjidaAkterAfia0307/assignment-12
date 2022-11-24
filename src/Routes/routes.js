import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Blog from "../Pages/Blog/Blog";
import Books from "../Pages/Books/Books";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/HomePage/Home/Home";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/blog",
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:"/categories/:name",
                element:<Books></Books>,
                loader:({params})=>fetch(`http://localhost:7000/categories/${params.name}`)
            },
        ]
    }
])