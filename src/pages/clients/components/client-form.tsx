import React from 'react';
import { useForm } from 'react-hook-form';
import {ICreateClient} from "@/types/dto/clients.dto.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

export const ClientForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICreateClient>();

    const onSubmit = (data: ICreateClient) => {
        console.log(data);
        // Aqui você pode implementar a lógica para enviar os dados
    };

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Cadastro de Cliente</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="personType">Tipo de Pessoa</Label>
                        <Input
                            id="personType"
                            {...register('personType', {required: 'Campo obrigatório'})}
                        />
                        {errors.personType && <span className="text-red-500 text-sm">{errors.personType.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="fullName">Nome Completo</Label>
                        <Input
                            id="fullName"
                            {...register('fullName', {required: 'Campo obrigatório'})}
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="document">Documento</Label>
                        <Input
                            id="document"
                            {...register('document')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rg">RG</Label>
                        <Input
                            id="rg"
                            {...register('rg')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rgEmitDate">Data de Emissão RG</Label>
                        <Input
                            id="rgEmitDate"
                            type="date"
                            {...register('rgEmitDate')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rgExpired">Data de Validade RG</Label>
                        <Input
                            id="rgExpired"
                            type="date"
                            {...register('rgExpired')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rgEmitBy">Órgão Emissor</Label>
                        <Input
                            id="rgEmitBy"
                            {...register('rgEmitBy')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                            id="phone"
                            {...register('phone', {required: 'Campo obrigatório'})}
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register('email', {required: 'Campo obrigatório'})}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nacionality">Nacionalidade</Label>
                        <Input
                            id="nacionality"
                            {...register('nacionality')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="maritalStatus">Estado Civil</Label>
                        <Input
                            id="maritalStatus"
                            {...register('maritalStatus')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="stateRegister">Registro Estadual</Label>
                        <Input
                            id="stateRegister"
                            {...register('stateRegister')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="dob">Data de Nascimento</Label>
                        <Input
                            id="dob"
                            type="date"
                            {...register('dob')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="gender">Gênero</Label>
                        <Input
                            id="gender"
                            {...register('gender')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address">Endereço</Label>
                        <Input
                            id="address"
                            {...register('address', {required: 'Campo obrigatório'})}
                        />
                        {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="zip_code">CEP</Label>
                        <Input
                            id="zip_code"
                            {...register('zip_code')}
                        />
                    </div>
                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="observations">Observações</Label>
                        <Textarea
                            id="observations"
                            {...register('observations')}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="isBlock"
                            {...register('isBlock')}
                        />
                        <Label htmlFor="isBlock">Bloqueado</Label>
                    </div>

                    <div className="col-span-3 space-y-2">
                        <Label htmlFor="blockReason">Motivo do Bloqueio</Label>
                        <Input
                            id="blockReason"
                            {...register('blockReason')}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">Salvar</Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default ClientForm;