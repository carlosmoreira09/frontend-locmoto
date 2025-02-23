import React from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {TrafficFineForm} from "@/pages/traffic-fines/components/add-traffic-fine.tsx";

const TrafficFinePage:React.FC = () => {

    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Adicionar Multa </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Dados da Multa</TabsTrigger>

                </TabsList>
                <TabsContent value="add-client">
                    <TrafficFineForm/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default TrafficFinePage;