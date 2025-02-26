import React, {useEffect} from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import {ICreateDriver} from "@/types/dto/drivers.dto.ts";
import {findaAllDrivers} from "@/service/drivers/driverService.ts";


export const DriversPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [drivers,setDrivers] = useState<ICreateDriver[]>()
    const router = useNavigate()

    const filteredData = drivers?.filter(
        (item) =>
            item.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.cnhNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.fatherName.includes(searchTerm),
    )
    const fetchDrivers = async () => {
        const result = await findaAllDrivers()
        setDrivers(result?.data)
    }
    useEffect(() => {
        fetchDrivers().then()
    }, []);
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("Searching:", searchTerm)
    }

    const handleRowClick = (driver: ICreateDriver) => {
        router(`/drivers/driver-details/`, { state: driver.id})
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Procurar Motoristas</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <Input
                            type="text"
                            placeholder="Digite nome, cpf ou cnpj"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow"
                        />
                        <Button type="submit" size="lg">
                            <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Listagem de Motoristas</h2>
                <Button onClick={() => router("/clients/add-client")}>
                    <UserPlus className="mr-2 h-4 w-4" /> Adicionar novo cliente
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Motorista</TableHead>
                        <TableHead>CNH</TableHead>
                        <TableHead>Validade</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.driverName}</TableCell>
                            <TableCell>{item.cnhNumber}</TableCell>
                            <TableCell>{item.cngExpired}</TableCell>
                            <TableCell>{item.isActive}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

