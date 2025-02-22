"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {IAddressForm} from "@/types/dto/clients.dto.ts";

export const AddressForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddressForm>()

    const onSubmit = (data: IAddressForm) => {
        console.log(data)
        // Implementar lógica de envio aqui
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Informações de Contato e Endereço</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input id="name" {...register("name", { required: "Campo obrigatório" })} />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="street">Logradouro</Label>
                        <Input id="street" {...register("street", { required: "Campo obrigatório" })} />
                        {errors.street && <span className="text-red-500 text-sm">{errors.street.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">Município</Label>
                        <Input id="city" {...register("city", { required: "Campo obrigatório" })} />
                        {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="neighborhood">Bairro</Label>
                        <Input id="neighborhood" {...register("neighborhood", { required: "Campo obrigatório" })} />
                        {errors.neighborhood && <span className="text-red-500 text-sm">{errors.neighborhood.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" {...register("state", { required: "Campo obrigatório" })} />
                        {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" {...register("phone", { required: "Campo obrigatório" })} />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
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

