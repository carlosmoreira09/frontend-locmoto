import React, {useEffect, useState} from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {VehiclePriceForm} from "@/pages/table-price/components/VehiclePriceForm.tsx";
import {useLocation} from "react-router-dom";
import {ICreatePriceTableDto} from "@/types/dto/table-price.dto.ts";
import {findOneVehiclePrice} from "@/service/table-price/tablePriceService.ts";
import {Spinner} from "@/components/ui/Spinner.tsx";

const AddTablePricePage:React.FC = () => {
    const [vehiclePrice,setVehiclePrice] = useState<ICreatePriceTableDto>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()

    const fetchPrices = async () => {

        if(location.state) {
            setIsLoading(true)
           try {
               const result = await findOneVehiclePrice(location.state)
               if (result?.data) {
                   setVehiclePrice(result?.data[0] || [])
               }
           } catch (error) {
                console.log(error)
           } finally {
               setIsLoading(false)
           }
        }
    }
    useEffect(() => {
        fetchPrices().then()
    }, []);
    if(isLoading) {
        return (
            <div className="flex items-center mx-auto">
                <Spinner size={30} />
            </div>
        )
    }
    return (
        <div>
            <div className="flex items-center mb-4">
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Tablela de Preços </h2>
            </div>
            <Tabs defaultValue="add-price" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-price">Cadastrar Preço</TabsTrigger>
                </TabsList>
                <TabsContent value="add-price">
                    <VehiclePriceForm priceInfo={vehiclePrice} />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default AddTablePricePage;