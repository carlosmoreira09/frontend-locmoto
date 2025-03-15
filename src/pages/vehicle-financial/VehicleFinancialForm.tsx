import React from "react"
import {useForm} from "react-hook-form"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {ICreateVehicleFinancial} from "@/types/dto/vehicle-financial.dto.ts";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {paymentMethod} from "@/lib/genericOptions.ts";

export const VehicleFinancialForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateVehicleFinancial>()


    const onSubmit = (data: ICreateVehicleFinancial) => {
        console.log(data)
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Financeiro do Veículo</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">

                    <div className="space-y-2">
                        <Label htmlFor="supplierName">Nome do Fornecedor</Label>
                        <Input id="supplierName" {...register("supplierName", {required: "Campo obrigatório"})} />
                        {errors.supplierName &&
                            <span className="text-red-500 text-sm">{errors.supplierName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="purchaseDay">Data da Compra</Label>
                        <Input id="purchaseDay"
                               type="date" {...register("purchaseDay", {required: "Campo obrigatório"})} />
                        {errors.purchaseDay &&
                            <span className="text-red-500 text-sm">{errors.purchaseDay.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nfNumber">Número da NF</Label>
                        <Input id="nfNumber" {...register("nfNumber", {required: "Campo obrigatório"})} />
                        {errors.nfNumber && <span className="text-red-500 text-sm">{errors.nfNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="totalPrice">Preço Total</Label>
                        <Input
                            id="totalPrice"
                            type="number"
                            step="0.01"
                            {...register("totalPrice", {
                                required: "Campo obrigatório",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.totalPrice && <span className="text-red-500 text-sm">{errors.totalPrice.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="totalPrice">Forma de Pagamento</Label>
                        <Select {...register("isFinancial")}>
                            <SelectTrigger id="isFinancial">
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
                        {errors.isFinancial && <span className="text-red-500 text-sm">{errors.isFinancial.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="quuantityMonth">Quantidade de Meses</Label>
                        <Input
                            id="quuantityMonth"
                            type="number"
                            {...register("quuantityMonth", {
                                required: "Campo obrigatório",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.quuantityMonth &&
                            <span className="text-red-500 text-sm">{errors.quuantityMonth.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="monthlyPrice">Preço Mensal</Label>
                        <Input
                            id="monthlyPrice"
                            type="number"
                            step="0.01"
                            {...register("monthlyPrice", {
                                required: "Campo obrigatório",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.monthlyPrice &&
                            <span className="text-red-500 text-sm">{errors.monthlyPrice.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="vehicle">Veículo</Label>
                        <Input
                            id="vehicle"
                            type="number"
                            {...register("vehicle", {
                                valueAsNumber: true,
                            })}
                        />
                        {errors.vehicle && <span className="text-red-500 text-sm">{errors.vehicle.message}</span>}
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

