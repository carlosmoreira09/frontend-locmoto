"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {ICreateInsurance} from "@/types/dto/insurance.dto.ts";


export const InsuranceForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateInsurance>()

    const onSubmit = (data: ICreateInsurance) => {
        console.log(data)
        // Implementar lógica de envio aqui
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Cadastro de Seguro</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Nome da Companhia</Label>
                        <Input id="companyName" {...register("companyName", { required: "Campo obrigatório" })} />
                        {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="policyNumber">Número da Apólice</Label>
                        <Input id="policyNumber" {...register("policyNumber", { required: "Campo obrigatório" })} />
                        {errors.policyNumber && <span className="text-red-500 text-sm">{errors.policyNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="startDate">Data de Início</Label>
                        <Input id="startDate" type="date" {...register("startDate", { required: "Campo obrigatório" })} />
                        {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="endDate">Data de Término</Label>
                        <Input id="endDate" type="date" {...register("endDate", { required: "Campo obrigatório" })} />
                        {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="situation">Situação</Label>
                        <Input id="situation" {...register("situation", { required: "Campo obrigatório" })} />
                        {errors.situation && <span className="text-red-500 text-sm">{errors.situation.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="awardType">Tipo de Prêmio</Label>
                        <Input id="awardType" {...register("awardType", { required: "Campo obrigatório" })} />
                        {errors.awardType && <span className="text-red-500 text-sm">{errors.awardType.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="policytype">Tipo de Apólice</Label>
                        <Input id="policytype" {...register("policytype", { required: "Campo obrigatório" })} />
                        {errors.policytype && <span className="text-red-500 text-sm">{errors.policytype.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="supplier">Fornecedor</Label>
                        <Input id="supplier" {...register("supplier", { required: "Campo obrigatório" })} />
                        {errors.supplier && <span className="text-red-500 text-sm">{errors.supplier.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="supplierName">Nome do Fornecedor</Label>
                        <Input id="supplierName" {...register("supplierName", { required: "Campo obrigatório" })} />
                        {errors.supplierName && <span className="text-red-500 text-sm">{errors.supplierName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="policyValueLiquid">Valor Líquido da Apólice</Label>
                        <Input
                            id="policyValueLiquid"
                            type="number"
                            step="0.01"
                            {...register("policyValueLiquid", {
                                required: "Campo obrigatório",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.policyValueLiquid && (
                            <span className="text-red-500 text-sm">{errors.policyValueLiquid.message}</span>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="iofValue">Valor IOF</Label>
                        <Input
                            id="iofValue"
                            type="number"
                            step="0.01"
                            {...register("iofValue", {
                                required: "Campo obrigatório",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.iofValue && <span className="text-red-500 text-sm">{errors.iofValue.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="awardTotalPolicy">Prêmio Total da Apólice</Label>
                        <Input
                            id="awardTotalPolicy"
                            type="number"
                            step="0.01"
                            {...register("awardTotalPolicy", {
                                required: "Campo obrigatório",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.awardTotalPolicy && <span className="text-red-500 text-sm">{errors.awardTotalPolicy.message}</span>}
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