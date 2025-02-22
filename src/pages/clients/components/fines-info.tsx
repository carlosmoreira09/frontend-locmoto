import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Fines() {
    const fines = [
        { id: 1, date: "2023-05-15", description: "Excesso de velocidade", value: 150.0 },
        { id: 2, date: "2023-06-02", description: "Estacionamento proibido", value: 80.0 },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Multas</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>Descrição</TableHead>
                            <TableHead className="text-right">Valor</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fines.map((fine) => (
                            <TableRow key={fine.id}>
                                <TableCell>{fine.date}</TableCell>
                                <TableCell>{fine.description}</TableCell>
                                <TableCell className="text-right">R$ {fine.value.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

