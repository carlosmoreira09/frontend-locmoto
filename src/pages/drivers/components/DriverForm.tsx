import React, {useEffect, useState} from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import { Button } from "@/components/ui/button.tsx"
import {ICreateDriver} from "@/types/dto/drivers.dto.ts";
import {useLocation} from "react-router-dom";
import {Spinner} from "@/components/ui/Spinner.tsx";
import {findOneDriver} from "@/service/drivers/driverService.ts";
import {useNavigate} from "react-router";
import {findAllClientIDs} from "@/service/clients/clientService.ts";
import GenericSelect from "@/components/GenericSelect.tsx";


export const DriverForm: React.FC = () => {
    const [driver,setDriver] = useState<ICreateDriver>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [clients, setClients] = useState<{ id: number, fullName: string}[]>([])
    const location = useLocation()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateDriver>()
    const fetchClients = async () => {
        const result = await findAllClientIDs()
        if(result?.data) {
            setClients(result?.data || [])
            setIsEditable(true)
        }
    }
    const fetchDriver = async () => {
        if(location.state) {
            setIsLoading(true)
            const result = await findOneDriver(location.state)
            if(result?.data) {
                setDriver(result?.data[0] || [])
                setIsEditable(true)
                setIsLoading(false)
            }
        }
    }
    useEffect(() => {
        fetchDriver().then()
    }, []);
    useEffect(() => {
        fetchClients().then()
    }, []);
    const onSubmit = (data: ICreateDriver) => {
        console.log(data)
        // Implemente aqui a lógica para enviar os dados
    }
    const toggleEditClient = () => {
        setIsEditable(!isEditable)
    }
    if(isLoading) {
        return (
            <Spinner size={54} />
        )
    }
    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <span>{!isEditable ? 'Cadastro de Motorista' : 'Informações do Motorista'}</span>
                    <div className="space-x-2">
                        <Button onClick={() => navigate('/drivers')} className="bg-amber-800 hover:bg-amber-700 text-white p-4 rounded-full">
                            Voltar
                        </Button>
                        <Button hidden={!location.pathname.includes('details')} onClick={toggleEditClient} className="bg-amber-800 text-white cursor-pointer hover:bg-amber-700 p-4 rounded-full">
                            {isEditable ? 'Editar Motorista' : 'Cancelar'}
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">

                    {clients && (
                        <div className="space-y-2">
                        <Label htmlFor="driverName">Selecione o Cliente</Label>
                        <GenericSelect items={clients} displayField="fullName" />
                        {errors.driverName && <span className="text-red-500 text-sm">{errors.driverName.message}</span>}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="driverName">Nome do Motorista</Label>
                        <Input disabled={isEditable} value={driver?.driverName}
                               id="driverName" {...register("driverName", {required: "Campo obrigatório"})} />
                        {errors.driverName && <span className="text-red-500 text-sm">{errors.driverName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="motherName">Nome da Mãe</Label>
                        <Input disabled={isEditable} value={driver?.motherName}
                               id="motherName" {...register("motherName", {required: "Campo obrigatório"})} />
                        {errors.motherName && <span className="text-red-500 text-sm">{errors.motherName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="fatherName">Nome do Pai</Label>
                        <Input id="fatherName" disabled={isEditable}
                               value={driver?.motherName} {...register("fatherName", {required: "Campo obrigatório"})} />
                        {errors.fatherName && <span className="text-red-500 text-sm">{errors.fatherName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" disabled={isEditable}
                               value={driver?.city} {...register("city", {required: "Campo obrigatório"})} />
                        {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhNumber">Número da CNH</Label>
                        <Input id="cnhNumber" disabled={isEditable}
                               value={driver?.cnhNumber} {...register("cnhNumber", {required: "Campo obrigatório"})} />
                        {errors.cnhNumber && <span className="text-red-500 text-sm">{errors.cnhNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhRegister">Registro CNH</Label>
                        <Input id="cnhRegister" disabled={isEditable}
                               value={driver?.cnhRegister} {...register("cnhRegister", {required: "Campo obrigatório"})} />
                        {errors.cnhRegister &&
                            <span className="text-red-500 text-sm">{errors.cnhRegister.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhSafeNumber">Número de Segurança CNH</Label>
                        <Input id="cnhSafeNumber" disabled={isEditable}
                               value={driver?.cnhSafeNumber} {...register("cnhSafeNumber", {required: "Campo obrigatório"})} />
                        {errors.cnhSafeNumber &&
                            <span className="text-red-500 text-sm">{errors.cnhSafeNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhEmitBy">Órgão Emissor CNH</Label>
                        <Input id="cnhEmitBy" disabled={isEditable}
                               value={driver?.cnhEmitBy} {...register("cnhEmitBy", {required: "Campo obrigatório"})} />
                        {errors.cnhEmitBy && <span className="text-red-500 text-sm">{errors.cnhEmitBy.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhCategory">Categoria CNH</Label>
                        <Input id="cnhCategory" disabled={isEditable}
                               value={driver?.cnhCategory} {...register("cnhCategory", {required: "Campo obrigatório"})} />
                        {errors.cnhCategory &&
                            <span className="text-red-500 text-sm">{errors.cnhCategory.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhEmitFirst">Primeira Emissão CNH</Label>
                        <Input id="cnhEmitFirst" disabled={isEditable} value={driver?.cnhEmitFirst}
                               type="date" {...register("cnhEmitFirst", {required: "Campo obrigatório"})} />
                        {errors.cnhEmitFirst &&
                            <span className="text-red-500 text-sm">{errors.cnhEmitFirst.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cngExpired">Validade CNH</Label>
                        <Input id="cngExpired" disabled={isEditable} value={driver?.cngExpired}
                               type="date" {...register("cngExpired", {required: "Campo obrigatório"})} />
                        {errors.cngExpired && <span className="text-red-500 text-sm">{errors.cngExpired.message}</span>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="isActive" disabled={isEditable}
                                  checked={driver?.isActive} {...register("isActive")} />
                        <Label htmlFor="isActive">Ativo</Label>
                    </div>

                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="driverObs">Observações</Label>
                        <Textarea disabled={isEditable} value={driver?.driverObs}
                                  id="driverObs" {...register("driverObs")} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Salvar
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

