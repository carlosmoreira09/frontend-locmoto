import React, {useEffect, useState} from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import { Button } from "@/components/ui/button.tsx"
import {ICreateTrafficFine} from "@/types/dto/drivers.dto.ts";
import {findOneTrafficFine} from "@/service/traffic-fines/trafficFineService.ts";
import {Spinner} from "@/components/ui/Spinner.tsx";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";


export const TrafficFineForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateTrafficFine>()
    const [fine, setFine] = useState<ICreateTrafficFine | undefined>(undefined)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const location = useLocation()
    const navigate = useNavigate()

    const toggleEditClient = () => {
        setIsEditable(!isEditable)
    }

    const onSubmit = (data: ICreateTrafficFine) => {
        console.log(data)
        // Implementar lógica de envio aqui
    }
    const fetchFine = async () => {
        setIsLoading(true)

        const result = await findOneTrafficFine(location.state)
        if(result?.data) {
            console.log(result)
            setFine(result?.data[0] || [])
            setIsEditable(true)
        }
        setIsLoading(false)

    }
    useEffect(() => {
        fetchFine().then()
    }, []);
    if(isLoading) {
        return (
            <Spinner size={54} />
        )
    }
    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    {!isEditable ? 'Cadastrar Multa de Trânsito' : 'Informações da Multa'}
                    <div className="space-x-2">
                    <Button onClick={() => navigate('/traffic-fines')} className="bg-amber-800 hover:bg-amber-700 text-white p-4 rounded-full">
                        Voltar
                    </Button>
                    <Button  onClick={toggleEditClient} className="bg-amber-800 hover:bg-amber-700 text-white p-4 rounded-full">
                        {isEditable ? 'Editar Multa' : 'Cancelar'}
                    </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="fineNumber">Número da Multa</Label>
                        <Input disabled={isEditable} placeholder={fine?.fineNumber} id="fineNumber" {...register("fineNumber", {required: "Campo obrigatório"})} />
                        {errors.fineNumber && <span className="text-red-500 text-sm">{errors.fineNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="vehicle">Veículo</Label>
                        <Input disabled={isEditable} placeholder={fine?.vehicle.plateNumber}
                            id="vehicle"
                            type="number"
                            {...register("vehicle", {
                                required: "Campo obrigatório",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.vehicle && <span className="text-red-500 text-sm">{errors.vehicle.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="fineDate">Data da Multa</Label>
                        <Input disabled={isEditable} placeholder={fine?.fineDate} id="fineDate" type="date" {...register("fineDate", {required: "Campo obrigatório"})} />
                        {errors.fineDate && <span className="text-red-500 text-sm">{errors.fineDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="autoNumber">Número do Auto</Label>
                        <Input disabled={isEditable} placeholder={fine?.autoNumber} id="autoNumber" {...register("autoNumber", {required: "Campo obrigatório"})} />
                        {errors.autoNumber && <span className="text-red-500 text-sm">{errors.autoNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="origin">Origem</Label>
                        <Input disabled={isEditable} placeholder={fine?.origin} id="origin" {...register("origin", {required: "Campo obrigatório"})} />
                        {errors.origin && <span className="text-red-500 text-sm">{errors.origin.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="severity">Gravidade</Label>
                        <Input disabled={isEditable} placeholder={fine?.severity} id="severity" {...register("severity", {required: "Campo obrigatório"})} />
                        {errors.severity && <span className="text-red-500 text-sm">{errors.severity.message}</span>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox disabled={isEditable} checked={fine?.isIntern} id="isIntern" {...register("isIntern")} />
                        <Label htmlFor="isIntern">Interno</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox disabled={isEditable} checked={fine?.isNotification} id="isNotification" {...register("isNotification")} />
                        <Label htmlFor="isNotification">Notificação</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox disabled={isEditable} checked={fine?.isRepeatOffender} id="isRepeatOffender" {...register("isRepeatOffender")} />
                        <Label htmlFor="isRepeatOffender">Reincidente</Label>
                    </div>

                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="violationAddress">Endereço da Violação</Label>
                        <Input disabled={isEditable} placeholder={fine?.violationAddress}
                            id="violationAddress" {...register("violationAddress", {required: "Campo obrigatório"})} />
                        {errors.violationAddress &&
                            <span className="text-red-500 text-sm">{errors.violationAddress.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input disabled={isEditable} placeholder={fine?.city} id="city" {...register("city", {required: "Campo obrigatório"})} />
                        {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="uf">UF</Label>
                        <Input disabled={isEditable} placeholder={fine?.uf} id="uf" {...register("uf", {required: "Campo obrigatório", maxLength: 2})}
                               maxLength={2}/>
                        {errors.uf && <span className="text-red-500 text-sm">{errors.uf.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="violationObs">Observações da Violação</Label>
                        <Textarea disabled={isEditable} placeholder={fine?.violationObs} id="violationObs" {...register("violationObs")} />
                        {errors.violationObs &&
                            <span className="text-red-500 text-sm">{errors.violationObs.message}</span>}
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

