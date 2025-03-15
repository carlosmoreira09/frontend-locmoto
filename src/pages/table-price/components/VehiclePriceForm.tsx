import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox"
import {Button} from "@/components/ui/button"
import {ICreatePriceTableDto} from "@/types/dto/table-price.dto.ts";
import {useNavigate} from "react-router";
import GenericSelect from "@/components/GenericSelect.tsx";
import {findAllIDGroup} from "@/service/vehicles/vehicleService.ts";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {periodOptions, storeOptions} from "@/lib/genericOptions.ts";

interface VehiclePriceFormProps {
    priceInfo?: ICreatePriceTableDto
}
export const VehiclePriceForm: React.FC<VehiclePriceFormProps> = ({ priceInfo }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ICreatePriceTableDto>()
    const [error, setError] = React.useState<string | null>(null)
    const [price, setPrice] = useState<ICreatePriceTableDto | undefined>(undefined)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [vehicles, setVehicles ] = useState<{id: number, groupName: string}[]>([])

    useEffect(() => {
        if(priceInfo) {
            setPrice(priceInfo)
            setIsEditable(true)
        }
    }, [priceInfo]);
    const navigate = useNavigate()

    const onSubmit = async (data: ICreatePriceTableDto) => {
        try {
            console.log(data)
            // Implementar lógica de envio aqui
        } catch (err) {
            setError('An error occurred while creating the price table. ' + err)
        }
    }
    const fetchVehicles = async () => {
        const result = await findAllIDGroup()
        if(result?.data) {
            setVehicles(result?.data || [])
        }
    }
    const toggleEditClient = () => {
        setIsEditable(!isEditable)
    }
    useEffect(() => {
        fetchVehicles().then()
    }, []);

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <span>{!isEditable ? 'Cadastro do Preço' : 'Informações do Cadatro'}</span>
                    <div className="space-x-2">
                        <Button onClick={() => navigate('/table-price')} className="bg-amber-800 hover:bg-amber-700 text-white p-4 rounded-full">
                            Voltar
                        </Button>
                        <Button hidden={!location.pathname.includes('details')} onClick={toggleEditClient} className="bg-amber-800 text-white cursor-pointer hover:bg-amber-700 p-4 rounded-full">
                            {isEditable ? 'Editar Preço' : 'Cancelar'}
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="group">Selecione o Grupo</Label>
                        <GenericSelect items={vehicles} displayField="groupName"/>
                        {errors.group && <span className="text-red-500 text-sm">{errors.group.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="vehicle">Selecione a loja</Label>

                        <Select {...register('store')}>
                            <SelectTrigger id="store">
                                <SelectValue placeholder="Selecione a loja"/>
                            </SelectTrigger>
                            <SelectContent className="bg-gray-200 rounded-xl">
                                {storeOptions.map((store) => (
                                    <SelectItem key={store.id} value={store.id.toString()}>
                                        {store.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="vehicle">Selecione a periodo</Label>

                        <Select {...register('period')}>
                            <SelectTrigger id="store">
                                <SelectValue placeholder="Selecione a loja"/>
                            </SelectTrigger>
                            <SelectContent className="bg-gray-200 rounded-xl">
                                {periodOptions.map((store) => (
                                    <SelectItem key={store.id} value={store.id}>
                                        {store.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="price">Valor</Label>
                        <Input disabled={isEditable} placeholder={price?.price.toString()}
                               id="price"
                               type="number"
                               step="0.01"
                               {...register("price", {
                                   required: "Price is required",
                                   min: {value: 0, message: "Price must be positive"},
                               })}
                        />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>

                    <div className="flex items-center space-x-2 col-span-full">
                        <Checkbox disabled={isEditable} checked={price?.isActive}
                                  id="isActive" {...register("isActive")} />
                        <Label htmlFor="isActive">Active</Label>
                    </div>
                    {error && <div className="text-red-500 text-sm col-span-full">{error}</div>}
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Creating..." : "Create Price Table"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
