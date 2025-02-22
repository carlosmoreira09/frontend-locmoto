import React from "react";
import {PlusCircle} from "lucide-react";
import ClientForm from "@/pages/clients/components/client-form.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {DriverForm} from "@/pages/clients/components/add-driver.tsx";
import {AddressForm} from "@/pages/clients/components/contact-info.tsx";

const AddClientPage:React.FC = () => {

    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Adicionar Cliente </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Dados do Cliente</TabsTrigger>
                    <TabsTrigger className="text-base" value="contacts">Contatos</TabsTrigger>
                    <TabsTrigger className="text-base" value="drivers">Motoristas</TabsTrigger>
                </TabsList>
                <TabsContent value="add-client">
                    <ClientForm/>
                </TabsContent>
                <TabsContent value="contacts">
                    <AddressForm/>
                </TabsContent>
                <TabsContent value="drivers">
                    <DriverForm/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default AddClientPage;