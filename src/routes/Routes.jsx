import React from 'react';
import {
    createBrowserRouter,    
} from "react-router-dom";
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/HomePage/Home/Home';
import AllSportsEquipment from '../pages/AllSportsEquipment/AllSportsEquipment';
import AddEquipment from '../pages/AddEquipment/AddEquipment';
import MyEquipment from '../pages/MyEquipment/MyEquipment';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword';
import FourOFour from '../pages/FourOFour/FourOFour';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }
            ,{
                path: "/all-sports",
                element: <AllSportsEquipment></AllSportsEquipment>,
            }
            ,{
                path: "/add-equipment",
                element: <PrivateRoute> <AddEquipment></AddEquipment></PrivateRoute>,
            }
            ,{
                path: "/my-equipment-list",
                element: <PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
            }
            ,{
                path: "/login",
                element: <Login></Login>,
            }
            ,{
                path: "/register",
                element:<Register></Register>,
            },{
                path: "/forget",
                element:<ForgetPassword></ForgetPassword>,
            },{
                path: "*",
                element:<FourOFour></FourOFour>,
            },
        ],
    },
]);

export default router;