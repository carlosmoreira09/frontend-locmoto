import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {IAddressForm} from "@/types/dto/clients.dto.ts";

export const AddContactInfo: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddressForm>()
    const [isEditing, setIsEditing] = useState(true)
    const [contactData, setContactData] = useState<IAddressForm | null>(null)

    const onSubmit = (data: IAddressForm) => {
        console.log(data)
        setContactData(data)
        setIsEditing(false)
    }

    const handleEdit = () => {
        setIsEditing(true)
    }
    if (!isEditing && contactData) {
        return (
            <Card className="w-full mx-auto">
                <CardHeader>
                    <CardTitle>Informações de Contato e Endereço</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label>Nome Completo</Label>
                        <p>{contactData.name}</p>
                    </div>
                    <div>
                        <Label>Logradouro</Label>
                        <p>{contactData.street}</p>
                    </div>
                    <div>
                        <Label>Município</Label>
                        <p>{contactData.city}</p>
                    </div>
                    <div>
                        <Label>Bairro</Label>
                        <p>{contactData.neighborhood}</p>
                    </div>
                    <div>
                        <Label>Estado</Label>
                        <p>{contactData.state}</p>
                    </div>
                    <div>
                        <Label>Telefone</Label>
                        <p>{contactData.phone}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleEdit} className="w-full">
                        Editar
                    </Button>
                </CardFooter>
            </Card>
        )
    }
    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Informações de Contato e Endereço</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input id="name" {...register("name", { required: "Campo obrigatório" })} />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2 col-span-2">
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

