import React, {useEffect, useState} from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {ClientContractInfo} from "@/pages/clients/components/contracts.tsx";
import {Drivers} from "@/pages/clients/components/drivers.tsx";
import {ICreateClient} from "@/types/dto/clients.dto.ts";
import {useLocation} from "react-router-dom";
import {Spinner} from "@/components/ui/Spinner.tsx";
import ClientInfo from "@/pages/clients/components/client-info.tsx";

const ClientDetails:React.FC = () => {
    const [client,setClient] = useState<ICreateClient>({} as ICreateClient)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()
    useEffect(() => {
        setIsLoading(true)
        console.log(location.state)
        if (location.state) {
            setClient(location.state);
            setIsLoading(false)
        }
    }, []);

    if(isLoading) {
        return (
            <Spinner size={54} />
        )
    }
    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Adicionar Cliente </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Dados do Cliente</TabsTrigger>
                    <TabsTrigger className="text-base" value="contacts">Motoristas</TabsTrigger>
                    <TabsTrigger className="text-base" value="contacts">Multas</TabsTrigger>
                    <TabsTrigger className="text-base" value="drivers">Contratos</TabsTrigger>
                </TabsList>
                <TabsContent value="add-client">
                    <ClientInfo client={client}/>
                </TabsContent>
                <TabsContent value="contacts">
                    <ClientContractInfo/>
                </TabsContent>
                <TabsContent value="drivers">
                    <Drivers/>
                </TabsContent>
                <TabsContent value="drivers">
                    <ClientContractInfo/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default ClientDetails;