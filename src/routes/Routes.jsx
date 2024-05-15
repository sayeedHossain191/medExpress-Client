import {
    createBrowserRouter,
    //RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import ServiceDetail from "../pages/ServiceDetail";
import AddService from "../pages/AddService";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";
import ManageService from "../pages/ManageService";
import UpdateService from "../pages/UpdateService";
import BookedService from "../pages/BookedService";
import ServiceToDo from "../pages/ServiceToDo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch(`https://b9a11-consultation-server.vercel.app/service`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch(`https://b9a11-consultation-server.vercel.app/service-count`)
            },
            {
                path: '/details/:id',
                element: <ServiceDetail />,
                loader: ({ params }) => fetch(`https://b9a11-consultation-server.vercel.app/service/${params.id}`)
            },
            {
                path: "/bookedService",
                element: <PrivateRoute>
                    <BookedService />
                </PrivateRoute>
            },
            {
                path: "/addService",
                element: <PrivateRoute>
                    <AddService />
                </PrivateRoute>
            },
            {
                path: "/manageService",
                element: <PrivateRoute>
                    <ManageService />
                </PrivateRoute>,
                //loader: () => fetch(`https://b9a11-consultation-server.vercel.app/addService`)
            },
            {
                path: '/updateService/:id',
                element: <UpdateService />,
                loader: ({ params }) => fetch(`https://b9a11-consultation-server.vercel.app/addService/${params.id}`)
            },
            {
                path: '/toDoService',
                element: <PrivateRoute>
                    <ServiceToDo />
                </PrivateRoute>
                //loader: () => fetch(`https://b9a11-consultation-server.vercel.app/service`)
            }

        ]
    },
]);

export default router;