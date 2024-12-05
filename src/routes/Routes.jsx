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
                path: "/all-add-equipment",
                element: <AddEquipment></AddEquipment>,
            }
            ,{
                path: "/my-equipment-list",
                element: <MyEquipment></MyEquipment>,
            }
            ,{
                path: "/login",
                element: <Login></Login>,
            }
            ,{
                path: "/register",
                element:<Register></Register>,
            },
        ],
    },
]);

export default router;