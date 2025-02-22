import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "../pages/auth/Login.tsx";
import AppLayout from "../pages/AppLayout.tsx";
import Dashboard from "../pages/home/Dashboard.tsx";
import AddClientPage from "@/pages/clients/AddClientPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" />
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path: 'home',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }]
    },
    {
        path: 'clients',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <AddClientPage />
            }]
    },
], {
    future: {
    v7_relativeSplatPath: true,
}});