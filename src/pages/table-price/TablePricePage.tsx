import React from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {VehiclePriceForm} from "@/pages/table-price/components/VehiclePriceForm.tsx";

const TablePricePage:React.FC = () => {

    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Tablela de Preços </h2>
            </div>
            <Tabs defaultValue="add-price" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-price">Cadastrar Preço</TabsTrigger>
                    <TabsTrigger className="text-base" value="table-list">Lista da Preços</TabsTrigger>
                </TabsList>
                <TabsContent value="add-price">
                    <VehiclePriceForm/>
                </TabsContent>
                <TabsContent value="table-list">
                    <VehiclePriceForm/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default TablePricePage;