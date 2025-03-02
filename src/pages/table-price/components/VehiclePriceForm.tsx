import React from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {ICreatePriceTableDto} from "@/types/dto/table-price.dto.ts";


export const VehiclePriceForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ICreatePriceTableDto>()
    const [error, setError] = React.useState<string | null>(null)

    const onSubmit = async (data: ICreatePriceTableDto) => {
        try {
            console.log(data)
            // Implementar lógica de envio aqui
        } catch (err) {
            setError('An error occurred while creating the price table. ' + err)
        }
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Create Price Table</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Escolha a moto</Label>
                        <Input id="name" {...register("name", { required: "Name is required" })} />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Escolha o periodo</Label>
                        <Input id="description" {...register("description")} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            type="number"
                            step="0.01"
                            {...register("price", {
                                required: "Price is required",
                                min: { value: 0, message: "Price must be positive" },
                            })}
                        />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="validFrom">Inicia em:</Label>
                        <Input id="validFrom" type="date" {...register("validFrom", { required: "Valid from date is required" })} />
                        {errors.validFrom && <span className="text-red-500 text-sm">{errors.validFrom.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="validTo">Termina em:</Label>
                        <Input id="validTo" type="date" {...register("validTo")} />
                    </div>

                    <div className="flex items-center space-x-2 col-span-full">
                        <Checkbox id="isActive" {...register("isActive")} />
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
