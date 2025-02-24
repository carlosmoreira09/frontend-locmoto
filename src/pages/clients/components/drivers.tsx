import type React from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus } from "lucide-react"
import {useNavigate} from "react-router";

// Simulated data - replace with your actual data fetching logic
const mockData = [
    { id: 1, name: "John Doe", type: "Client", email: "john@example.com", phone: "(123) 456-7890" },
    { id: 2, name: "Jane Smith", type: "Driver", email: "jane@example.com", phone: "(098) 765-4321" },
    // Add more mock data as needed
]

export const Drivers:React.FC = () => {

    const router = useNavigate()

    const handleRowClick = (id: number) => {
        router(`/client-details/${id}`)
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
                        <TableHead>Type</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockData.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

