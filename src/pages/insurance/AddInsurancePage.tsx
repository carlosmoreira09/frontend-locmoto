import React, {useEffect, useState} from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {useLocation} from "react-router-dom";
import {Spinner} from "@/components/ui/Spinner.tsx";
import {ICreateInsurance} from "@/types/dto/insurance.dto.ts";
import {findOneInsurance} from "@/service/insurance/insuranceService.ts";
import {InsuranceForm} from "@/pages/insurance/components/InsuranceForm.tsx";

const AddInsurancePage:React.FC = () => {
    const [receipt,setReceipt] = useState<ICreateInsurance>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()

    const fetchInsurance = async () => {

        if(location.state) {
            setIsLoading(true)
            try {
                const result = await findOneInsurance(location.state)
                if (result?.data) {
                    setReceipt(result?.data[0] || [])
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
    }
    useEffect(() => {
        fetchInsurance().then()
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
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Seguros </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Adicionar Seguro</TabsTrigger>
                </TabsList>
                <TabsContent value="add-client">
                    <InsuranceForm insuranceInfo={receipt}/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default AddInsurancePage;