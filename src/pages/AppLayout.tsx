import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import {Toaster} from "sonner";

const AppLayout: React.FC = () => {
    
    return (

        <div className="min-h-screen bg-gray-100">
            <Header/>
            <main className="container mx-auto mt-8 px-4">
                    <Outlet/>
                    <Toaster/>
                </main>
            </div>
)
    ;
}

export default AppLayout;