import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {CreateReceiptDto} from "@/types/dto/receipts.dto.ts";


const ReceiptForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
    } = useForm<CreateReceiptDto>()

    const onSubmit = async (data: CreateReceiptDto) => {
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
                <CardTitle>Gerar Recibo</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select onValueChange={(value) => setValue("status", value)}>
                            <SelectTrigger id="status">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.status && <span className="text-red-500 text-sm">{errors.status.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" {...register("companyName", { required: "Company name is required" })} />
                        {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nfseNumber">NFSe Number</Label>
                        <Input id="nfseNumber" {...register("nfseNumber", { required: "NFSe number is required" })} />
                        {errors.nfseNumber && <span className="text-red-500 text-sm">{errors.nfseNumber.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nfseDate">NFSe Date</Label>
                        <Input id="nfseDate" type="date" {...register("nfseDate", { required: "NFSe date is required" })} />
                        {errors.nfseDate && <span className="text-red-500 text-sm">{errors.nfseDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="expiredDate">Expired Date</Label>
                        <Input
                            id="expiredDate"
                            type="date"
                            {...register("expiredDate", { required: "Expired date is required" })}
                        />
                        {errors.expiredDate && <span className="text-red-500 text-sm">{errors.expiredDate.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="monthReference">Month Reference</Label>
                        <Input
                            id="monthReference"
                            type="date"
                            {...register("monthReference", { required: "Month reference is required" })}
                        />
                        {errors.monthReference && <span className="text-red-500 text-sm">{errors.monthReference.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="contractNumber">Contract Number</Label>
                        <Input
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
                        <Input
                            id="client"
                            type="number"
                            {...register("client", {
                                required: "Client ID is required",
                                valueAsNumber: true,
                            })}
                        />
                        {errors.client && <span className="text-red-500 text-sm">{errors.client.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
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

