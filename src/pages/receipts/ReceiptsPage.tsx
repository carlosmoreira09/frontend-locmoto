import React from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import ReceiptForm from "@/pages/receipts/components/add-receipt.tsx";

const ReceiptsPage:React.FC = () => {

    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Recibos </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Gerar Recibo</TabsTrigger>
                </TabsList>
                <TabsContent value="add-client">
                    <ReceiptForm/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default ReceiptsPage;