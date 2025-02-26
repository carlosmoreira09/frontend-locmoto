import type React from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import { ICreateTrafficFine} from "@/types/dto/drivers.dto.ts";

interface DriversProps {
    fines?: ICreateTrafficFine[]
}
export const TrafficFines:React.FC<DriversProps> = ({fines}: DriversProps) => {
    const router = useNavigate()

    const handleRowClick = (id: number | undefined) => {
    console.log(id)
    }
    return (
        <div className="container mx-auto p-4">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Lista de Multas do Cliente</h2>
                <Button onClick={() => router("/clients/add-client")}>
                    <UserPlus className="mr-2 h-4 w-4" /> Adicionar nova multa
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N. da Multa</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {fines?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.vehicle}</TableCell>
                            <TableCell>{item.autoNumber}</TableCell>
                            <TableCell>{item.severity}</TableCell>
                            <TableCell>{item.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

