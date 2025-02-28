import React, {useEffect} from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx"
import { Search, UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import {findaAllTrafficFines} from "@/service/traffic-fines/trafficFineService.ts";
import {ICreateTrafficFine} from "@/types/dto/drivers.dto.ts";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";


export const TrafficFinePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [fines,setFines] = useState<ICreateTrafficFine[]>()
    const router = useNavigate()

    const filteredData = fines?.filter(
        (item) =>
            item.fineNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const fetchTrafficFines = async () => {
        const result = await findaAllTrafficFines()
        setFines(result?.data)
    }
    useEffect(() => {
        fetchTrafficFines().then()
    }, []);
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // Implement search logic here
        console.log("Searchingfor:", searchTerm)
    }

    const handleRowClick = (trafficFine: number | undefined) => {
        router(`/traffic-fines/fine-details/`, { state: trafficFine})
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Procurar Clientes</CardTitle>
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
                <h2 className="text-2xl font-bold">Listagem de clientes</h2>
                <Button onClick={() => router("/clients/add-client")}>
                    <UserPlus className="mr-2 h-4 w-4" /> Adicionar novo cliente
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>ID LocMoto</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>N. da Multa</TableHead>
                        <TableHead>Gravidade</TableHead>
                        <TableHead>Cidade</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.fineNumber}</TableCell>
                            <TableCell>{format(item.fineDate, "dd/MM/yyyy", {locale: ptBR}) || "Sem resgistro"}</TableCell>
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

