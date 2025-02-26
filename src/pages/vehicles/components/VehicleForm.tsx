import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {ICreateVehicle} from "@/types/dto/vehicles.dto.ts";
import {Checkbox} from "@/components/ui/checkbox.tsx";
interface VehicleProps {
    vehicleInfo?: ICreateVehicle
}
export const VehicleForm: React.FC<VehicleProps> = ({vehicleInfo}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICreateVehicle>()
    const [vehicle, setVehicle] = useState<ICreateVehicle | undefined>(undefined)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    useEffect(() => {
        if(vehicleInfo) {
            setVehicle(vehicleInfo)
            setIsEditable(true)
        }
    }, [vehicleInfo]);
    const onSubmit = (data: ICreateVehicle) => {
        console.log(data)
        // Implement the logic to send the data to your backend
    }
    const toggleEditClient = () => {
        setIsEditable(!isEditable)
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    {!isEditable ? 'Cadastro da Moto' : 'Informações da Moto'}
                    <button  onClick={toggleEditClient} className="bg-amber-800 text-white p-4 rounded-full">
                        {isEditable ? 'Editar Moto' : 'Cancelar'}
                    </button>
                </CardTitle>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="plateNumber">Placa</Label>
                        <Input disabled={isEditable} placeholder={vehicle?.plateNumber}
                               id="plateNumber"
                               {...register('plateNumber', {required: 'Campo obrigatório'})}
                        />
                        {errors.plateNumber &&
                            <span className="text-red-500 text-sm">{errors.plateNumber.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="color">Cor</Label>
                        <Input disabled={isEditable} placeholder={vehicle?.color}
                               id="color"
                               {...register('color', {required: 'Campo obrigatório'})}
                        />
                        {errors.color && <span className="text-red-500 text-sm">{errors.color.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="renavam">Renavam</Label>
                        <Input disabled={isEditable} placeholder={vehicle?.renavam}
                               id="renavam"
                               {...register('renavam', {required: 'Campo obrigatório'})}
                        />
                        {errors.renavam && <span className="text-red-500 text-sm">{errors.renavam.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="chassi">Chassi</Label>
                        <Input disabled={isEditable} placeholder={vehicle?.chassi}
                               id="chassi"
                               {...register('chassi', {required: 'Campo obrigatório'})}
                        />
                        {errors.chassi && <span className="text-red-500 text-sm">{errors.chassi.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="yearModelBuild">Ano/Modelo</Label>
                        <Input disabled={isEditable} placeholder={vehicle?.yearModelBuild}
                               id="yearModelBuild"
                               {...register('yearModelBuild', {required: 'Campo obrigatório'})}
                        />
                        {errors.yearModelBuild &&
                            <span className="text-red-500 text-sm">{errors.yearModelBuild.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fuelType">Tipo de Combustível</Label>
                        <Input disabled={isEditable} placeholder={vehicle?.fuelType}
                               id="fuelType"
                               {...register('fuelType', {required: 'Campo obrigatório'})}
                        />
                        {errors.fuelType && <span className="text-red-500 text-sm">{errors.fuelType.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="modelName">Modelo</Label>
                        <Input disabled={isEditable} placeholder={vehicle?.modelName}
                               id="modelName"
                               {...register('modelName', {required: 'Campo obrigatório'})}
                        />
                        {errors.modelName && <span className="text-red-500 text-sm">{errors.modelName.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input disabled={isEditable} value={vehicle?.company}
                               id="company"
                               {...register('company', {required: 'Campo obrigatório'})}
                        />
                        {errors.company && <span className="text-red-500 text-sm">{errors.company.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="odometer">Odômetro</Label>
                        <Input disabled={isEditable} value={vehicle?.odometer}
                               id="odometer"
                               {...register('odometer', {required: 'Campo obrigatório'})}
                        />
                        {errors.odometer && <span className="text-red-500 text-sm">{errors.odometer.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="location">Localização</Label>
                        <Input disabled={isEditable} value={vehicle?.location}
                               id="location"
                               {...register('location', {required: 'Campo obrigatório'})}
                        />
                        {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tenant">Locatário</Label>
                        <Input disabled={isEditable} value={vehicle?.odometer}
                               id="tenant"
                               type="number"
                               {...register('tenant', {required: 'Campo obrigatório', valueAsNumber: true})}
                        />
                        {errors.tenant && <span className="text-red-500 text-sm">{errors.tenant.message}</span>}
                    </div>
                    <div className="flex items-center mt-5 space-x-2">
                        <Checkbox disabled={isEditable} value={vehicle?.isActive?.toString()}
                                  id="isBlock"
                                  {...register('isActive')}
                        />
                        <Label htmlFor="isBlock">Ativo</Label>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="vehicleObs">Observações</Label>
                    <Textarea disabled={isEditable} value={vehicle?.vehicleObs}
                              id="vehicleObs"
                              {...register('vehicleObs')}
                    />
                </div>
            </form>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full">Salvar</Button>
            </CardFooter>
        </Card>
    );
};

export default VehicleForm;