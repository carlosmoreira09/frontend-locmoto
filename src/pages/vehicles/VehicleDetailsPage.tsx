import React, {useEffect, useState} from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {ClientContractInfo} from "@/pages/clients/components/contracts.tsx";
import {useLocation} from "react-router-dom";
import {Spinner} from "@/components/ui/Spinner.tsx";
import {TrafficFines} from "@/pages/clients/components/traffic-fines.tsx";
import {ICreateVehicle} from "@/types/dto/vehicles.dto.ts";
import {findOneVehicle} from "@/service/vehicles/vehicleService.ts";
import VehicleForm from "@/pages/vehicles/components/VehicleForm.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";

export const VehicleDetails:React.FC = () => {
    const [vehicle,setVehicle] = useState<ICreateVehicle>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()

    const fetchVehicle = async () => {
        setIsLoading(true)

        const result = await findOneVehicle(location.state)
        if(result?.data) {
            setVehicle(result?.data[0] || [])
        }
        setIsLoading(false)

    }
    useEffect(() => {
        fetchVehicle().then()
    }, []);
    const [activeTab, setActiveTab] = useState("vehicle-details")
    const tabValues = ["vehicle-details", "fines", "insurance", "contracts"]

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
                <PlusCircle className="mr-2 h-5 w-5"/> <h2 className="text-xl font-semibold"> Informações da Moto: {vehicle?.modelName} </h2>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="vehicle-details">Dados do Moto</TabsTrigger>
                    <TabsTrigger className="text-base" value="attachs">Anexos</TabsTrigger>
                    <TabsTrigger className="text-base" value="fines">Multas</TabsTrigger>
                    <TabsTrigger className="text-base" value="contracts">Contratos</TabsTrigger>
                </TabsList>
                <TabsContent value="vehicle-details">
                    <VehicleForm vehicleInfo={vehicle}/>
                </TabsContent>
                <TabsContent value="attachs">
                    <div>
                        <Textarea placeholder="Lista de Anexos"/>
                    </div>
                </TabsContent>
                <TabsContent value="fines">
                    <TrafficFines fines={vehicle?.trafficFines} client={vehicle?.modelName} />
                </TabsContent>
                <TabsContent value="contracts">
                    <ClientContractInfo/>
                </TabsContent>
            </Tabs>
            <button onClick={handleNextTab}></button>

        </div>
    )
}
