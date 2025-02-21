import {RouterProvider} from "react-router";
import React from "react";
import {router} from "./routes";
import {ToastProvider} from "@radix-ui/react-toast";


const App: React.FC = () => {
    return (
        <div className="">
            <main className="flex-1">
                    <ToastProvider>
                    <RouterProvider future={{
                        v7_startTransition: true,
                    }} router={router}/>
                    </ToastProvider>
            </main>
        </div>
    )
};

export default App;