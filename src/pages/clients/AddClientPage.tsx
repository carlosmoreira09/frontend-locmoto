import React from "react";
import {PlusCircle} from "lucide-react";
import ClientForm from "@/pages/clients/components/ClientForm.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {DriverForm} from "@/pages/drivers/components/DriverForm.tsx";
import {AddContactInfo} from "@/pages/clients/components/add-contact-info.tsx";

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
                    <div className="space-y-4">
                        <AddContactInfo/>
                        <AddContactInfo/>
                    </div>

                </TabsContent>
                <TabsContent value="drivers">
                    <DriverForm/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default AddClientPage;