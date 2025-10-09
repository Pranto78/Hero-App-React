import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AppDetails from "../Components/AppDetails/AppDetails";


const Root = lazy(() => import("../Components/Root/Root"));
const Home = lazy(() => import("../Components/Home/Home"));
const AllApps = lazy(() => import("../Components/AllApps/AllApps"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/Apps.json"),
        element: <Home />, 
      },
      {
        path: "/all-apps",
        loader: () => fetch("/Apps.json"),
        element: <AllApps />, 
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/Apps.json"),
        element: <AppDetails></AppDetails>
      }
    ],
  },
]);
