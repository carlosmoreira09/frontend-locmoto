import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "../pages/auth/Login.tsx";
import AppLayout from "../pages/AppLayout.tsx";
import AddClientPage from "@/pages/clients/AddClientPage.tsx";
import {VehicleRegistration} from "@/pages/vehicles/VehicleRegistration.tsx";
import AddTrafficFine from "@/pages/traffic-fines/AddTrafficFine.tsx";
import AddTablePricePage from "@/pages/table-price/AddTablePricePage.tsx";
import AddReceiptsPage from "@/pages/receipts/AddReceiptsPage.tsx";
import ClientDetails from "@/pages/clients/ClientDetailsPage.tsx";
import {ClientsPage} from "@/pages/clients/ClientsPage.tsx";
import {DriversPage} from "@/pages/drivers/DriversPage.tsx";
import {DriverForm} from "@/pages/drivers/components/DriverForm.tsx";
import {VehicleDetails} from "@/pages/vehicles/VehicleDetailsPage.tsx";
import {VehiclesPage} from "@/pages/vehicles/VehiclesPage.tsx";
import {TrafficFineForm} from "@/pages/traffic-fines/components/TrafficFineForm.tsx";
import {TablePricePage} from "@/pages/table-price/TablePricePage.tsx";
import Home from "../pages/home/Home.tsx";
import {TrafficFinePage} from "@/pages/traffic-fines/TrafficFinePage.tsx";
import {ReceiptsPage} from "@/pages/receipts/ReceiptsPage.tsx";
import {InsuranceForm} from "@/pages/insurance/components/InsuranceForm.tsx";
import {InsurancePage} from "@/pages/insurance/InsurancePage.tsx";
import AddInsurancePage from "@/pages/insurance/AddInsurancePage.tsx";


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
                element: <Home />
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
                index: true,
                element: <TablePricePage />
            },
            {
                path: 'add-price',
                element: <AddTablePricePage />
            },
            {
                path: 'vehicle-price',
                element: <AddTablePricePage />
            }]
    },
    {
        path: 'receipts',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <ReceiptsPage />
            },

            {
                path: 'new-receipt',
                element: <AddReceiptsPage />
            },
            {
                path: 'receipt-details',
                element: <AddReceiptsPage />
            }]
    },{
        path: 'insurances',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <InsurancePage />
            },

            {
                path: 'new-insurance',
                element: <InsuranceForm />
            },
            {
                path: 'insurance-details',
                element: <AddInsurancePage />
            }]
    }

], {
    future: {
    v7_relativeSplatPath: true,
}});