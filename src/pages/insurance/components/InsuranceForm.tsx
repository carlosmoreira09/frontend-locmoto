import React, {useEffect, useState} from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Button } from "@/components/ui/button.tsx"
import {ICreateInsurance} from "@/types/dto/insurance.dto.ts";
import {useNavigate} from "react-router";

interface InsuranceProps {
    insuranceInfo?: ICreateInsurance
}
export const InsuranceForm: React.FC<InsuranceProps> = ({insuranceInfo}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateInsurance>()
    const [insurance, setInsurance] = useState<ICreateInsurance | undefined>(undefined)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const navigate = useNavigate()
    useEffect(() => {
        if(insuranceInfo) {
            setInsurance(insuranceInfo)
            setIsEditable(true)
        }
    }, [insuranceInfo]);
    const onSubmit = (data: ICreateInsurance) => {
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
                    {!isEditable ? 'Cadastro do Seguro' : 'Informações do Seguro'}
                    <div className="space-x-2">
                        <Button onClick={() => navigate('/insurances')}
                                className="bg-amber-800 text-white cursor-pointer p-4 hover:bg-amber-700 rounded-full">
                            Voltar
                        </Button>
                        <Button onClick={toggleEditClient} className="bg-amber-800 text-white cursor-pointer hover:bg-amber-700 p-4 rounded-full">
                            {isEditable ? 'Editar Seguro' : 'Cancelar'}
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Nome da Companhia</Label>
                        <Input disabled={isEditable} placeholder={insurance?.companyName} id="companyName" {...register("companyName", { required: "Campo obrigatório" })} />
                        {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="policyNumber">Número da Apólice</Label>
                        <Input disabled={isEditable} placeholder={insurance?.policyNumber}  id="policyNumber" {...register("policyNumber", { required: "Campo obrigatório" })} />
                        {errors.policyNumber && <span className="text-red-500 text-sm">{errors.policyNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="startDate">Data de Início</Label>
                        <Input disabled={isEditable} placeholder={insurance?.startDate}  id="startDate" type="date" {...register("startDate", { required: "Campo obrigatório" })} />
                        {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="endDate">Data de Término</Label>
                        <Input disabled={isEditable} placeholder={insurance?.endDate}  id="endDate" type="date" {...register("endDate", { required: "Campo obrigatório" })} />
                        {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="situation">Situação</Label>
                        <Input disabled={isEditable} placeholder={insurance?.situation}  id="situation" {...register("situation", { required: "Campo obrigatório" })} />
                        {errors.situation && <span className="text-red-500 text-sm">{errors.situation.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="awardType">Tipo de Prêmio</Label>
                        <Input disabled={isEditable} placeholder={insurance?.awardType}  id="awardType" {...register("awardType", { required: "Campo obrigatório" })} />
                        {errors.awardType && <span className="text-red-500 text-sm">{errors.awardType.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="policytype">Tipo de Apólice</Label>
                        <Input disabled={isEditable} placeholder={insurance?.policytype}  id="policytype" {...register("policytype", { required: "Campo obrigatório" })} />
                        {errors.policytype && <span className="text-red-500 text-sm">{errors.policytype.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="supplier">Fornecedor</Label>
                        <Input disabled={isEditable} placeholder={insurance?.supplier}  id="supplier" {...register("supplier", { required: "Campo obrigatório" })} />
                        {errors.supplier && <span className="text-red-500 text-sm">{errors.supplier.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="supplierName">Nome do Fornecedor</Label>
                        <Input disabled={isEditable} placeholder={insurance?.supplierName}  id="supplierName" {...register("supplierName", { required: "Campo obrigatório" })} />
                        {errors.supplierName && <span className="text-red-500 text-sm">{errors.supplierName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="policyValueLiquid">Valor Líquido da Apólice</Label>
                        <Input disabled={isEditable} value={insurance?.policyValueLiquid}
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
                        <Input disabled={isEditable} value={insurance?.iofValue}
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
                        <Input disabled={isEditable} value={insurance?.awardTotalPolicy}
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
                        <Input disabled={isEditable} value={insurance?.vehicle}
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