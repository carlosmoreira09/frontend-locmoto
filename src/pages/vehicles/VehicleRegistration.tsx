import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {PlusCircle} from "lucide-react";
import Fines from "@/pages/clients/components/fines-info.tsx";
import {DriverForm} from "@/pages/clients/components/add-driver.tsx";
import VehicleForm from "@/pages/vehicles/components/vehicle-form.tsx";

export const VehicleRegistration: React.FC = () => {
    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Adicionar Moto </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Dados da Moto</TabsTrigger>
                    <TabsTrigger className="text-base" value="contacts">Seguro</TabsTrigger>
                    <TabsTrigger className="text-base" value="drivers">Dados de Compra</TabsTrigger>

                </TabsList>
                <TabsContent value="add-client">
                    <VehicleForm/>
                </TabsContent>
                <TabsContent value="contacts">
                    <Fines/>
                </TabsContent>
                <TabsContent value="drivers">
                    <DriverForm/>
                </TabsContent>
            </Tabs>

        </div>
    )
}
