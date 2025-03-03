import React, {useEffect} from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";
import {findaAllReceipts} from "@/service/receipts/receiptsService.ts";
import {ICreateReceiptDto} from "@/types/dto/receipts.dto.ts";


export const ReceiptsPage: React.FC = () => {
    const [receipts,setReceipts] = useState<ICreateReceiptDto[]>()
    const navigate = useNavigate()

    const fetchReceipts = async () => {
        const result = await findaAllReceipts()
        setReceipts(result?.data)
    }
    useEffect(() => {
        fetchReceipts().then()
    }, []);

    const handleRowClick = (id_receipt: number | undefined) => {
        navigate(`/receipts/receipt-details/`, { state: id_receipt})
    }

    return (
        <div className="container mx-auto p-4">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Lista de Recibo</h2>
                <Button className="cursor-pointer" onClick={() => navigate("/receipts/new-receipt")}>
                    <UserPlus className="mr-2 h-4 w-4" /> Adicionar Recibo
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID Recibo</TableHead>
                        <TableHead>Empresa</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Mês de Referência</TableHead>
                        <TableHead>NFSE Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {receipts?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.contractNumber}</TableCell>
                            <TableCell>{item.price.toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</TableCell>
                            <TableCell>{format(item.monthReference, "dd/MM/yyyy", { locale: ptBR })}</TableCell>
                            <TableCell>{format(item.nfseDate, "dd/MM/yyyy", { locale: ptBR })}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

