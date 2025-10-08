import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Components/Home/Home';
import Apps from '../Components/Apps/Apps';
import AllApps from '../Components/AllApps/AllApps';

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,

        children : [

            {
                index:true,
                loader: ()=> fetch("Apps.json"),
                path:'/',
                Component: Home
            },
            {
                path:'/all-apps',
                loader: ()=> fetch("Apps.json"),
                Component:AllApps
            }
        ]
    }
])