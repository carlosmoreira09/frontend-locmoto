import React, {useEffect, useState} from "react";
import {PlusCircle} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import ReceiptForm from "@/pages/receipts/components/ReceiptForm.tsx";
import {useLocation} from "react-router-dom";
import {ICreateReceiptDto} from "@/types/dto/receipts.dto.ts";
import {findOneReceipt} from "@/service/receipts/receiptsService.ts";
import {Spinner} from "@/components/ui/Spinner.tsx";

const AddReceiptsPage:React.FC = () => {
    const [receipt,setReceipt] = useState<ICreateReceiptDto>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()

    const fetchPrices = async () => {

        if(location.state) {
            setIsLoading(true)
            try {
                const result = await findOneReceipt(location.state)
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
                <PlusCircle className="mr-2 h-4 w-4"/> <h2 className="text-xl font-semibold"> Recibos </h2>
            </div>
            <Tabs defaultValue="add-client" className="w-full">
                <TabsList>
                    <TabsTrigger className="text-base" value="add-client">Gerar Recibo</TabsTrigger>
                </TabsList>
                <TabsContent value="add-client">
                    <ReceiptForm receiptInfo={receipt}/>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default AddReceiptsPage;