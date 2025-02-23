import React from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {AddVehiclePrice} from "@/pages/table-price/components/add-vehicle-price.tsx";

const TablePricePage:React.FC = () => {

    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Tablela de Preços </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Cadastrar Preço</TabsTrigger>
                    <TabsTrigger className="text-base" value="add-client">Lista da Preços</TabsTrigger>

                </TabsList>
                <TabsContent value="add-client">
                    <AddVehiclePrice/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default TablePricePage;