import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "../pages/auth/Login.tsx";
import AppLayout from "../pages/AppLayout.tsx";
import Dashboard from "../pages/home/Dashboard.tsx";
import AddClientPage from "@/pages/clients/AddClientPage.tsx";
import {VehicleRegistration} from "@/pages/vehicles/VehicleRegistration.tsx";
import AddTrafficFine from "@/pages/traffic-fines/AddTrafficFine.tsx";
import TablePricePage from "@/pages/table-price/TablePricePage.tsx";
import ReceiptsPage from "@/pages/receipts/ReceiptsPage.tsx";
import ClientDetails from "@/pages/clients/ClientDetailsPage.tsx";
import {ClientsPage} from "@/pages/clients/ClientsPage.tsx";
import {DriversPage} from "@/pages/drivers/DriversPage.tsx";
import {DriverForm} from "@/pages/drivers/components/DriverForm.tsx";
import {VehicleDetails} from "@/pages/vehicles/VehicleDetailsPage.tsx";
import {VehiclesPage} from "@/pages/vehicles/VehiclesPage.tsx";
import {TrafficFinePage} from "@/pages/traffic-fines/TrafficFinePage.tsx";
import {TrafficFineForm} from "@/pages/traffic-fines/components/TrafficFineForm.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" />
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
                element: <ClientsPage />
            },
            {
                path: 'add-client',
                element: <AddClientPage />
            },
            {
                path: 'client-details',
                element: <ClientDetails />
            },
        ]
    }, {
        path: 'drivers',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <DriversPage />
            },
            {
                path: 'add-client',
                element: <AddClientPage />
            },
            {
                path: 'driver-details',
                element: <DriverForm />
            },
        ]
    },
    {
        path: 'vehicles',
        element: <AppLayout />,
        children: [
            {
            index: true,
            element: <VehiclesPage />
            },
            {
                path: 'add-vehicle',
                element: <VehicleRegistration />
            },
            {
                path: 'vehicle-details',
                element: <VehicleDetails />
            },
        ]
    },
    {
        path: 'traffic-fines',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <TrafficFinePage />
            },
            {
                path: 'add-fine',
                element: <AddTrafficFine />
            },
            {
                path: 'fine-details',
                element: <TrafficFineForm />
            }]
    },
    {
        path: 'table-price',
        element: <AppLayout />,
        children: [
            {
                path: 'add-price',
                element: <TablePricePage />
            }]
    },
    {
        path: 'receipts',
        element: <AppLayout />,
        children: [
            {
                path: 'new-receipt',
                element: <ReceiptsPage />
            }]
    },

], {
    future: {
    v7_relativeSplatPath: true,
}});