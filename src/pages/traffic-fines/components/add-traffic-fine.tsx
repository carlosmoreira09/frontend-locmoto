import type React from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import { Button } from "@/components/ui/button.tsx"
import {ICreateTrafficFine} from "@/types/dto/drivers.dto.ts";


export const TrafficFineForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateTrafficFine>()

    const onSubmit = (data: ICreateTrafficFine) => {
        console.log(data)
        // Implementar lógica de envio aqui
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Cadastro de Multa de Trânsito</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="fineNumber">Número da Multa</Label>
                        <Input id="fineNumber" {...register("fineNumber", {required: "Campo obrigatório"})} />
                        {errors.fineNumber && <span className="text-red-500 text-sm">{errors.fineNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="vehicle">Veículo</Label>
                        <Input
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
                        <Input id="fineDate" type="date" {...register("fineDate", {required: "Campo obrigatório"})} />
                        {errors.fineDate && <span className="text-red-500 text-sm">{errors.fineDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="autoNumber">Número do Auto</Label>
                        <Input id="autoNumber" {...register("autoNumber", {required: "Campo obrigatório"})} />
                        {errors.autoNumber && <span className="text-red-500 text-sm">{errors.autoNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="origin">Origem</Label>
                        <Input id="origin" {...register("origin", {required: "Campo obrigatório"})} />
                        {errors.origin && <span className="text-red-500 text-sm">{errors.origin.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="severity">Gravidade</Label>
                        <Input id="severity" {...register("severity", {required: "Campo obrigatório"})} />
                        {errors.severity && <span className="text-red-500 text-sm">{errors.severity.message}</span>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="isIntern" {...register("isIntern")} />
                        <Label htmlFor="isIntern">Interno</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="isNotification" {...register("isNotification")} />
                        <Label htmlFor="isNotification">Notificação</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="isRepeatOffender" {...register("isRepeatOffender")} />
                        <Label htmlFor="isRepeatOffender">Reincidente</Label>
                    </div>

                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="violationAddress">Endereço da Violação</Label>
                        <Input
                            id="violationAddress" {...register("violationAddress", {required: "Campo obrigatório"})} />
                        {errors.violationAddress &&
                            <span className="text-red-500 text-sm">{errors.violationAddress.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" {...register("city", {required: "Campo obrigatório"})} />
                        {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="uf">UF</Label>
                        <Input id="uf" {...register("uf", {required: "Campo obrigatório", maxLength: 2})}
                               maxLength={2}/>
                        {errors.uf && <span className="text-red-500 text-sm">{errors.uf.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="violationObs">Observações da Violação</Label>
                        <Textarea id="violationObs" {...register("violationObs")} />
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

