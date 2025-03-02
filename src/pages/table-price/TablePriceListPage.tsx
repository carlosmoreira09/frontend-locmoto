import React, {useEffect} from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import {findaAllClients} from "@/service/clients/clientService.ts";
import {ICreatePriceTableDto} from "@/types/dto/table-price.dto.ts";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";


export const TablePriceListPage: React.FC = () => {
    const [prices,setPrices] = useState<ICreatePriceTableDto[]>()
    const router = useNavigate()

    const fetchPrices = async () => {
        const result = await findaAllClients()
        setPrices(result?.data)
    }
    useEffect(() => {
        fetchPrices().then()
    }, []);

    const handleRowClick = (id_price: number | undefined) => {
        router(`/table-price/vehicle-price/`, { state: id_price})
    }

    return (
        <div className="container mx-auto p-4">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Listagem de clientes</h2>
                <Button onClick={() => router("/clients/add-client")}>
                    <UserPlus className="mr-2 h-4 w-4" /> Adicionar novo cliente
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Periodo</TableHead>
                        <TableHead>Valido de:</TableHead>
                        <TableHead>Valido até</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {prices?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{format(item.validFrom, "dd/MM/yyyy", { locale: ptBR })}</TableCell>
                            <TableCell>{format(item.validTo, "dd/MM/yyyy", { locale: ptBR })}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

