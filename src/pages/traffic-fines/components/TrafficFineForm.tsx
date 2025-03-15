import React, {useEffect, useState} from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import { Button } from "@/components/ui/button.tsx"
import {ICreateTrafficFine} from "@/types/dto/drivers.dto.ts";
import {findOneTrafficFine} from "@/service/traffic-fines/trafficFineService.ts";
import {Spinner} from "@/components/ui/Spinner.tsx";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";
import {findAllVehicleIDs} from "@/service/vehicles/vehicleService.ts";
import GenericSelect from "@/components/GenericSelect.tsx";
import {findAllClientIDs, findOneClient} from "@/service/clients/clientService.ts";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {paymentMethod} from "@/lib/genericOptions.ts";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";


export const TrafficFineForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateTrafficFine>()
    const [fine, setFine] = useState<ICreateTrafficFine | undefined>(undefined)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [vehicles, setVehicles ] = useState<{id: number, plateNumber: number, modelName: string}[]>([])
    const [drivers, setDrivers] = useState<{id: number, driverName: string}[]>()
    const [clients, setClients] = useState<{ id: number, fullName: string}[]>([])
    const [selectedClient, setSelectedClient ] = useState<string>()
    const location = useLocation()
    const navigate = useNavigate()

    const toggleEditClient = () => {
        setIsEditable(!isEditable)
    }
    const fetchDrivers = async () => {
        if(selectedClient) {
            const result = await findOneClient(selectedClient)
            if(result?.data) {
                setDrivers(result?.data[0].drivers || [])
            }
        }
    }
    const fetchClients = async () => {
        const result = await findAllClientIDs()
        if(result?.data) {
            setClients(result?.data || [])
        }
    }

    const onSubmit = (data: ICreateTrafficFine) => {
        console.log(data)
        // Implementar lógica de envio aqui
    }
    const fetchVehicles = async () => {
            const result = await findAllVehicleIDs()
            if(result?.data) {
                setVehicles(result?.data[0] || [])
            }
    }
    const fetchFine = async () => {
        if(location.state) {
            setIsLoading(true)
            const result = await findOneTrafficFine(location.state)
            if(result?.data) {
                console.log(result)
                setFine(result?.data[0] || [])
                setIsEditable(true)
            }
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchVehicles().then()
    }, []);
    useEffect(() => {
        fetchFine().then()
    }, []);
    useEffect(() => {
        fetchClients().then()
    }, []);
    useEffect(() => {
        fetchDrivers().then()
    }, [selectedClient]);
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
                    <Button hidden={!location.pathname.includes('details')} onClick={toggleEditClient} className="bg-amber-800 text-white cursor-pointer hover:bg-amber-700 p-4 rounded-full">
                        {isEditable ? 'Editar Multa' : 'Cancelar'}
                    </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">

                    <div className="space-y-2">
                        <Label htmlFor="autoNumber">Número do Contrato</Label>
                        <Input disabled={isEditable} placeholder={fine?.autoNumber}
                               id="autoNumber" {...register("autoNumber", {required: "Campo obrigatório"})} />
                        {errors.autoNumber && <span className="text-red-500 text-sm">{errors.autoNumber.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="vehicle">Selecione a Moto</Label>
                        <GenericSelect items={vehicles} displayField="modelName"/>
                        {errors.vehicle && <span className="text-red-500 text-sm">{errors.vehicle.message}</span>}
                    </div>
                    {clients && (
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Selecione o Cliente</Label>
                            <GenericSelect onChange={setSelectedClient} items={clients} displayField="fullName"/>
                            {errors.client && <span className="text-red-500 text-sm">{errors.client.message}</span>}
                        </div>
                    )}
                    {drivers && (
                        <div className="space-y-2">
                            <Label htmlFor="driverName">Selecione o Motorista</Label>
                            <GenericSelect items={drivers} displayField="driverName"/>
                            {errors.driver && <span className="text-red-500 text-sm">{errors.driver.message}</span>}
                        </div>
                    )}
                    <div className="space-y-2">
                        <Label htmlFor="autoNumber">Número do Auto</Label>
                        <Input disabled={isEditable} placeholder={fine?.autoNumber}
                               id="autoNumber" {...register("autoNumber", {required: "Campo obrigatório"})} />
                        {errors.autoNumber && <span className="text-red-500 text-sm">{errors.autoNumber.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fineDate">Data da Multa</Label>
                        <Input disabled={isEditable}
                               placeholder={fine?.fineDate ? format(fine?.fineDate, "yyyy-MM-dd", {locale: ptBR}) : ''}
                               id="fineDate"
                               type="date" {...register("fineDate", {required: "Campo obrigatório"})} />
                        {errors.fineDate && <span className="text-red-500 text-sm">{errors.fineDate.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="validity">Vigência</Label>
                        <Input disabled={isEditable}
                               placeholder={fine?.validity ? format(fine?.validity, "yyyy-MM-dd", {locale: ptBR}) : ''}
                               id="validity" {...register("autoNumber", {required: "Campo obrigatório"})} />
                        {errors.validity && <span className="text-red-500 text-sm">{errors.validity.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="autoNumber">Valor da Multa</Label>
                        <Input disabled={isEditable} placeholder={fine?.price.toString()}
                               id="price" {...register("autoNumber", {required: "Campo obrigatório"})} />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="paymentMethod">Forma de Pagamento</Label>
                        <Select {...register("paymentMethod")}>
                            <SelectTrigger className="w-max" id="paymentMethod">
                                <SelectValue placeholder="Forma de Pagamento"/>
                            </SelectTrigger>
                            <SelectContent>
                                {paymentMethod?.map((method) => (
                                    <SelectItem key={method.id} value={method.id}>
                                        {method.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.paymentMethod &&
                            <span className="text-red-500 text-sm">{errors.paymentMethod.message}</span>}
                    </div>


                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="violationObs">Observações da Violação</Label>
                        <Textarea disabled={isEditable} placeholder={fine?.violationObs}
                                  id="violationObs" {...register("violationObs")} />
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

