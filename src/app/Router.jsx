import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/mainLayout";
import PageNotFound from "../components/common/PageNotFound";
import Home from "../pages/Home";
import AuthGaurad from "../guards/AuthGaurad";
import Jobs from "../pages/jobs";
import Companies from "../pages/companies";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <PageNotFound />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'jobs',
                    element: <Jobs />
                },
                {
                    path: 'companies',
                    element: <Companies />
                },
            ]
        },
        {
            path: 'login',
            element: <AuthGaurad />,
            children: [
                {
                    index: true,
                    element: <Login />
                }
            ]
        },
        {
            path: 'register',
            element: <AuthGaurad />,
            children: [
                {
                    index: true,
                    element: <Register />
                }
            ]
        }
    ]
)