import React, {useEffect} from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import {findaAllVehicles} from "@/service/vehicles/vehicleService.ts";
import {ICreateVehicle} from "@/types/dto/vehicles.dto.ts";


export const VehiclesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [clients,setClients] = useState<ICreateVehicle[]>()
    const router = useNavigate()

    const filteredData = clients?.filter(
        (item) =>
            item.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.plateNumber.includes(searchTerm),
    )
    const fetchVehicles = async () => {
        const result = await findaAllVehicles()
        setClients(result?.data)
    }
    useEffect(() => {
        fetchVehicles().then()
    }, []);
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // Implement search logic here
        console.log("Searching:", searchTerm)
    }

    const handleRowClick = (vehicle: ICreateVehicle) => {
        router(`/vehicles/vehicle-details/`, { state: vehicle.id})
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Procurar Veiculos</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <Input
                            type="text"
                            placeholder="Digite Modelo ou placa"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow"
                        />
                        <Button type="submit" size="lg">
                            <Search className="mr-2 h-4 w-4" /> Procurar
                        </Button>
                    </form>
                </CardContent>
            </Card>

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
                        <TableHead>Place</TableHead>
                        <TableHead>Localização</TableHead>
                        <TableHead>Modelo</TableHead>
                        <TableHead>Ano </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.plateNumber}</TableCell>
                            <TableCell>{item.location}</TableCell>
                            <TableCell>{item.company}</TableCell>
                            <TableCell>{item.yearModelBuild}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

