import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import React from "react";

export const ClientContractInfo:React.FC = () => {
    const contracts = [
        { id: 1, startDate: "2023-07-01", endDate: "2023-07-07", motorcycle: "Honda CB 500", value: 450.0 },
        { id: 2, startDate: "2023-07-15", endDate: "2023-07-20", motorcycle: "Yamaha MT-07", value: 600.0 },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Contratos Abertos</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Data Início</TableHead>
                            <TableHead>Data Fim</TableHead>
                            <TableHead>Motocicleta</TableHead>
                            <TableHead className="text-right">Valor</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {contracts.map((contract) => (
                            <TableRow key={contract.id}>
                                <TableCell>{contract.startDate}</TableCell>
                                <TableCell>{contract.endDate}</TableCell>
                                <TableCell>{contract.motorcycle}</TableCell>
                                <TableCell className="text-right">R$ {contract.value.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

