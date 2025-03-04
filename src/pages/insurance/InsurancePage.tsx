import React, {useEffect} from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus } from "lucide-react"
import {useNavigate} from "react-router";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";
import {ICreateInsurance} from "@/types/dto/insurance.dto.ts";
import {findaAllInsurances} from "@/service/insurance/insuranceService.ts";


export const InsurancePage: React.FC = () => {
    const [insurances,setInsurances] = useState<ICreateInsurance[]>()
    const navigate = useNavigate()

    const fetchInsurance = async () => {
        const result = await findaAllInsurances()
        setInsurances(result?.data)
    }
    useEffect(() => {
        fetchInsurance().then()
    }, []);

    const handleRowClick = (id_insurance: number | undefined) => {
        navigate(`/insurances/insurance-details/`, { state: id_insurance})
    }

    return (
        <div className="container mx-auto p-4">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Lista de Seguros</h2>
                <Button className="cursor-pointer" onClick={() => navigate("/insurances/new-insurance")}>
                    <UserPlus className="mr-2 h-4 w-4" /> Adicionar Seguro
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID Seguro</TableHead>
                        <TableHead>Empresa do Seguro</TableHead>
                        <TableHead>Número da Apolice</TableHead>
                        <TableHead>Situação</TableHead>
                        <TableHead>Data de Inicio</TableHead>
                        <TableHead>Data Final</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {insurances?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer hover:bg-muted">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.insuranceCompany}</TableCell>
                            <TableCell>{item.policyNumber}</TableCell>
                            <TableCell>{item.situation}</TableCell>
                            <TableCell>{format(item.startDate, "dd/MM/yyyy", { locale: ptBR })}</TableCell>
                            <TableCell>{format(item.endDate, "dd/MM/yyyy", { locale: ptBR })}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

