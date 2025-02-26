"use client"

import React, {useEffect} from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import {findaAllClients} from "@/service/clients/clientService.ts";
import {ICreateClient} from "@/types/dto/clients.dto.ts";


export const ClientsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [clients,setClients] = useState<ICreateClient[]>()
    const router = useNavigate()

    const filteredData = clients?.filter(
        (item) =>
            item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.document.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phone.includes(searchTerm),
    )
    const fetchClients = async () => {
        const result = await findaAllClients()
        setClients(result?.data)
    }
    useEffect(() => {
        fetchClients().then()
    }, []);
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // Implement search logic here
        console.log("Searching for:", searchTerm)
    }

    const handleRowClick = (client: ICreateClient) => {
        router(`/clients/client-details/`, { state: client.id_client})
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
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData?.map((item) => (
                        <TableRow key={item.id_client} onClick={() => handleRowClick(item)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id_client}</TableCell>
                            <TableCell>{item.personType}</TableCell>
                            <TableCell>{item.fullName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

