import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Components/Home/Home';
import Apps from '../Components/Apps/Apps';

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,

        children : [

            {
                index:true,
                path:'/',
                Component: Home
            },
            {
                path:'/apps',
                Component: Apps
            }
        ]
    }
])