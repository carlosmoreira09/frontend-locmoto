import React, {useEffect} from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {ICreateReceiptDto} from "@/types/dto/receipts.dto.ts";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";
import {useNavigate} from "react-router";
import {findAllClientIDs, findOneClient} from "@/service/clients/clientService.ts";
import GenericSelect from "@/components/GenericSelect.tsx";
import {receiptStatusOptions} from "@/lib/genericOptions.ts";
interface ReceiptProps {
    receiptInfo?: ICreateReceiptDto
}

const ReceiptForm: React.FC<ReceiptProps> = ({receiptInfo}) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [receipt, setReceipt] = useState<ICreateReceiptDto | undefined>(undefined)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [drivers, setDrivers] = useState<{id: number, driverName: string}[]>()
    const [clients, setClients] = useState<{ id: number, fullName: string}[]>([])
    const [selectedClient, setSelectedClient ] = useState<string>()
    const navigate = useNavigate()
    useEffect(() => {
        if(receiptInfo) {
            setReceipt(receiptInfo)
            setIsEditable(true)
        }
    }, [receiptInfo]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ICreateReceiptDto>()
    const fetchDrivers = async () => {
        if(selectedClient) {
            console.log(selectedClient)
            const result = await findOneClient(selectedClient)
            if(result?.data) {
                setDrivers(result?.data[0].drivers || [])
                setIsEditable(true)
            }
        }

    }
    const fetchClients = async () => {
        const result = await findAllClientIDs()
        if(result?.data) {
            setClients(result?.data || [])
            setIsEditable(true)
        }
    }
    useEffect(() => {
        fetchClients().then()
    }, []);
    useEffect(() => {
        fetchDrivers().then()
    }, [selectedClient]);
    const onSubmit = async (data: ICreateReceiptDto) => {
        setIsSubmitting(true)
        console.log(data)
        setIsSubmitting(false)
        if(!data) {
            setError('teste')
        }
        reset()
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <span>{!isEditable ? 'Cadastro do Preço' : 'Informações do Cadatro'}</span>
                    <div className="space-x-2">
                        <Button onClick={() => navigate('/receipts')} className="bg-amber-800 hover:bg-amber-700 text-white p-4 rounded-full">
                            Voltar
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <GenericSelect  items={receiptStatusOptions} displayField="label" />

                        {errors.status && <span className="text-red-500 text-sm">{errors.status.message}</span>}
                    </div>
                    {clients && (
                        <div className="space-y-2">
                            <Label htmlFor="driverName">Selecione o Cliente</Label>
                            <GenericSelect onChange={setSelectedClient} items={clients} displayField="fullName" />
                            {errors.driverName && <span className="text-red-500 text-sm">{errors.driverName.message}</span>}
                        </div>
                    )}
                    {drivers && (
                        <div className="space-y-2">
                            <Label htmlFor="driverName">Selecione o Motorista</Label>
                            <GenericSelect items={drivers} displayField="driverName" />
                            {errors.driverName && <span className="text-red-500 text-sm">{errors.driverName.message}</span>}
                        </div>
                    )}
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input disabled={isEditable} placeholder={receipt?.companyName} id="companyName" {...register("companyName", { required: "Company name is required" })} />
                        {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nfseNumber">NFSe Number</Label>
                        <Input disabled={isEditable} placeholder={receipt?.nfseNumber} id="nfseNumber" {...register("nfseNumber", { required: "NFSe number is required" })} />
                        {errors.nfseNumber && <span className="text-red-500 text-sm">{errors.nfseNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nfseDate">NFSe Date</Label>
                        <Input disabled={isEditable} placeholder={receipt?.nfseDate?.toLocaleDateString()} id="nfseDate" type="date" {...register("nfseDate", { required: "NFSe date is required" })} />
                        {errors.nfseDate && <span className="text-red-500 text-sm">{errors.nfseDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="expiredDate">Expired Date</Label>
                        <Input disabled={isEditable} placeholder={receipt?.expiredDate?.toLocaleDateString()}
                            id="expiredDate"
                            type="date"
                            {...register("expiredDate", { required: "Expired date is required" })}
                        />
                        {errors.expiredDate && <span className="text-red-500 text-sm">{errors.expiredDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="monthReference">Month Reference</Label>
                        <Input disabled={isEditable} value={receipt?.monthReference ? format(receipt.monthReference, "dd/MM/yyyy", { locale: ptBR}) : ''}
                            id="monthReference"
                            type="date"
                            {...register("monthReference", { required: "Month reference is required" })}
                        />
                        {errors.monthReference && <span className="text-red-500 text-sm">{errors.monthReference.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="contractNumber">Contract Number</Label>
                        <Input disabled={isEditable} placeholder={receipt?.companyName}
                            id="contractNumber"
                            type="number"
                            {...register("contractNumber", {
                                required: "Contract number is required",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.contractNumber && <span className="text-red-500 text-sm">{errors.contractNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="client">Client ID</Label>
                        <Input disabled={isEditable} value={receipt?.client}
                            id="client"
                            type="string"
                            {...register("client", {
                                required: "Client ID is required",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.client && <span className="text-red-500 text-sm">{errors.client.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input disabled={isEditable} value={Number(receipt?.price).toLocaleString('pt-BR', {
                            maximumFractionDigits: 2,
                            minimumIntegerDigits: 2
                        })}
                            id="price"
                            type="number"
                            step="0.01"
                            {...register("price", {
                                required: "Necessário incluir o valor",
                                valueAsNumber: true,
                                min: { value: 0, message: "Valor precisa ser maior que 0" },
                            })}
                        />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>

                    {error && <div className="text-red-500 text-sm col-span-full">{error}</div>}
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Gerando..." : "Gerar Recibo"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default ReceiptForm;

