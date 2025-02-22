import type React from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import { Button } from "@/components/ui/button.tsx"
import {ICreateDriver} from "@/types/dto/drivers.dto.ts";


export const DriverForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateDriver>()

    const onSubmit = (data: ICreateDriver) => {
        console.log(data)
        // Implemente aqui a lógica para enviar os dados
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Cadastro de Motorista</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="motherName">Nome da Mãe</Label>
                        <Input id="motherName" {...register("motherName", { required: "Campo obrigatório" })} />
                        {errors.motherName && <span className="text-red-500 text-sm">{errors.motherName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="fatherName">Nome do Pai</Label>
                        <Input id="fatherName" {...register("fatherName", { required: "Campo obrigatório" })} />
                        {errors.fatherName && <span className="text-red-500 text-sm">{errors.fatherName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" {...register("city", { required: "Campo obrigatório" })} />
                        {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhNumber">Número da CNH</Label>
                        <Input id="cnhNumber" {...register("cnhNumber", { required: "Campo obrigatório" })} />
                        {errors.cnhNumber && <span className="text-red-500 text-sm">{errors.cnhNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhRegister">Registro CNH</Label>
                        <Input id="cnhRegister" {...register("cnhRegister", { required: "Campo obrigatório" })} />
                        {errors.cnhRegister && <span className="text-red-500 text-sm">{errors.cnhRegister.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhSafeNumber">Número de Segurança CNH</Label>
                        <Input id="cnhSafeNumber" {...register("cnhSafeNumber", { required: "Campo obrigatório" })} />
                        {errors.cnhSafeNumber && <span className="text-red-500 text-sm">{errors.cnhSafeNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhEmitBy">Órgão Emissor CNH</Label>
                        <Input id="cnhEmitBy" {...register("cnhEmitBy", { required: "Campo obrigatório" })} />
                        {errors.cnhEmitBy && <span className="text-red-500 text-sm">{errors.cnhEmitBy.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhCategory">Categoria CNH</Label>
                        <Input id="cnhCategory" {...register("cnhCategory", { required: "Campo obrigatório" })} />
                        {errors.cnhCategory && <span className="text-red-500 text-sm">{errors.cnhCategory.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cnhEmitFirst">Primeira Emissão CNH</Label>
                        <Input id="cnhEmitFirst" type="date" {...register("cnhEmitFirst", { required: "Campo obrigatório" })} />
                        {errors.cnhEmitFirst && <span className="text-red-500 text-sm">{errors.cnhEmitFirst.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cngExpired">Validade CNH</Label>
                        <Input id="cngExpired" type="date" {...register("cngExpired", { required: "Campo obrigatório" })} />
                        {errors.cngExpired && <span className="text-red-500 text-sm">{errors.cngExpired.message}</span>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="isActive" {...register("isActive")} />
                        <Label htmlFor="isActive">Ativo</Label>
                    </div>

                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="driverObs">Observações</Label>
                        <Textarea id="driverObs" {...register("driverObs")} />
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

