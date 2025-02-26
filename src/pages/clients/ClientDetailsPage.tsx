import React, {useEffect, useState} from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {ClientContractInfo} from "@/pages/clients/components/contracts.tsx";
import {Drivers} from "@/pages/clients/components/drivers.tsx";
import {ICreateClient} from "@/types/dto/clients.dto.ts";
import {useLocation} from "react-router-dom";
import {Spinner} from "@/components/ui/Spinner.tsx";
import ClientForm from "@/pages/clients/components/client-form.tsx";
import {AddContactInfo} from "@/pages/clients/components/add-contact-info.tsx";
import {TrafficFines} from "@/pages/clients/components/traffic-fines.tsx";
import { findOneClient} from "@/service/clients/clientService.ts";

const ClientDetails:React.FC = () => {
    const [client,setClient] = useState<ICreateClient>({} as ICreateClient)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()

    const fetchClients = async () => {
        setIsLoading(true)

        const result = await findOneClient(location.state)
        if(result?.data) {
            setClient(result?.data[0] || [])
        }
        setIsLoading(false)

    }
    useEffect(() => {
        fetchClients().then()
    }, []);
    const [activeTab, setActiveTab] = useState("add-client")
    const tabValues = ["add-client", "drivers", "contacts", "contracts"]

    const handleNextTab = () => {
        const currentIndex = tabValues.indexOf(activeTab)
        if (currentIndex < tabValues.length - 1) {
            setActiveTab(tabValues[currentIndex + 1])
        }
    }
    if(isLoading) {
        return (
            <Spinner size={54} />
        )
    }
    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-5 w-5"/> <h2 className="text-xl font-semibold"> Informações do Cliente </h2>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Dados do Cliente</TabsTrigger>
                    <TabsTrigger className="text-base" value="contacts">Contatos</TabsTrigger>
                    <TabsTrigger className="text-base" value="drivers">Motoristas</TabsTrigger>
                    <TabsTrigger className="text-base" value="fines">Multas</TabsTrigger>
                    <TabsTrigger className="text-base" value="contracts">Contratos</TabsTrigger>
                </TabsList>
                <TabsContent value="add-client">
                    <ClientForm clientInfo={client}/>
                </TabsContent>
                <TabsContent value="contacts">
                    <div className="space-y-4">
                        <AddContactInfo/>
                        <AddContactInfo/>
                    </div>

                </TabsContent>
                <TabsContent value="contracts">
                    <ClientContractInfo/>
                </TabsContent>
                <TabsContent value="drivers">
                    <Drivers drivers={client.drivers}/>
                </TabsContent>
                <TabsContent value="fines">
                    <TrafficFines fines={client.fines}/>
                </TabsContent>
            </Tabs>
            <button onClick={handleNextTab}></button>

        </div>
    )
}

export default ClientDetails;