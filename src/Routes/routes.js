import { createBrowserRouter } from "react-router-dom";
import BigLoading from "../Components/Loading/BigLoading";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Blog from "../Pages/Blog/Blog";
import Books from "../Pages/Books/Books";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
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
                element:<PrivateRoute><Books></Books></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:7000/categories/${params.name}`)
            },
        ],
        
    },

    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/dashboard/addproduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/dashboard/myproduct",
                element:<MyProducts></MyProducts>
            },
        ]
    }
])