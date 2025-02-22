import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "../pages/auth/Login.tsx";
import AppLayout from "../pages/AppLayout.tsx";
import Dashboard from "../pages/home/Dashboard.tsx";
import AddClientPage from "@/pages/clients/AddClientPage.tsx";
import {VehicleRegistration} from "@/pages/vehicles/VehicleRegistration.tsx";
import {TrafficFineForm} from "@/pages/traffic-fines/add-traffic-fine.tsx";


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
                path: 'add-client',
                element: <AddClientPage />
            }]
    },
    {
        path: 'vehicles',
        element: <AppLayout />,
        children: [
            {
                path: 'add-vehicle',
                element: <VehicleRegistration />
            }]
    },
    {
        path: 'traffic-fines',
        element: <AppLayout />,
        children: [
            {
                path: 'add-fine',
                element: <TrafficFineForm />
            }]
    }
], {
    future: {
    v7_relativeSplatPath: true,
}});