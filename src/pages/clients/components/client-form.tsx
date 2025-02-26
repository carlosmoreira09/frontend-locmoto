import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import {ICreateClient} from "@/types/dto/clients.dto.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import { format } from 'date-fns'
import {ptBR} from "date-fns/locale";
interface ClientInfoCardProps {
    clientInfo?: ICreateClient
}
export const ClientForm: React.FC<ClientInfoCardProps> = ({clientInfo}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICreateClient>();
    const [client, setClient] = useState<ICreateClient | undefined>(undefined)
    const [isEditable, setIsEditable] = useState<boolean>(false)
    useEffect(() => {
        if(clientInfo) {
            setClient(clientInfo)
            setIsEditable(true)
        }
    }, [client, clientInfo]);
    const onSubmit = (data: ICreateClient) => {
        console.log(data);
        // Aqui você pode implementar a lógica para enviar os dados
    };
    const toggleEditClient = () => {
        setIsEditable(!isEditable)
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    {!isEditable ? 'Cadastro do Cliente' : 'Informações do Cliente'}
                    <button  onClick={toggleEditClient} className="bg-amber-800 text-white p-4 rounded-full">
                        {isEditable ? 'Editar Cliente' : 'Cancelar Editar'}
                    </button>
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="personType">Tipo de Pessoa</Label>
                        <Input disabled={isEditable} placeholder={client?.personType}
                               id="personType"
                               {...register('personType', {required: 'Campo obrigatório'})}
                        />
                        {errors.personType && <span className="text-red-500 text-sm">{errors.personType.message}</span>}
                    </div>

                    <div className="col-span-2 space-y-2">
                        <Label htmlFor="fullName">Nome Completo</Label>
                        <Input disabled={isEditable} placeholder={client?.fullName}
                               id="fullName"
                               {...register('fullName', {required: 'Campo obrigatório'})}
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="document">Documento</Label>
                        <Input disabled={isEditable} placeholder={client?.document}
                               id="document"
                               {...register('document')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rg">RG</Label>
                        <Input disabled={isEditable} placeholder={client?.rg}
                               id="rg"
                               {...register('rg')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rgEmitDate">Data de Emissão RG</Label>
                        <Input disabled={isEditable} value={client?.rgEmitDate ? format(client?.rgEmitDate, "yyyy-MM-dd", {locale: ptBR}) : ''}
                               id="rgEmitDate"
                               type="date"
                               {...register('rgEmitDate')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rgExpired">Data de Validade RG</Label>
                        <Input disabled={isEditable} value={client?.rgExpired ? format(client?.rgExpired, "yyyy-MM-dd", {locale: ptBR}) : ''}
                               id="rgExpired"
                               type="date"
                               {...register('rgExpired')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rgEmitBy">Órgão Emissor</Label>
                        <Input disabled={isEditable} value={client?.rgEmitBy?.toString()}
                               id="rgEmitBy"
                               {...register('rgEmitBy')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input disabled={isEditable} value={client?.phone?.toString()}
                               id="phone"
                               {...register('phone', {required: 'Campo obrigatório'})}
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input disabled={isEditable} value={client?.email?.toString()}
                               id="email"
                               type="email"
                               {...register('email', {required: 'Campo obrigatório'})}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nacionality">Nacionalidade</Label>
                        <Input disabled={isEditable} value={client?.nacionality?.toString()}
                               id="nacionality"
                               {...register('nacionality')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="maritalStatus">Estado Civil</Label>
                        <Input disabled={isEditable} value={client?.maritalStatus?.toString()}
                               id="maritalStatus"
                               {...register('maritalStatus')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="stateRegister">Registro Estadual</Label>
                        <Input disabled={isEditable} value={client?.stateRegister?.toString()}
                               id="stateRegister"
                               {...register('stateRegister')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="dob">Data de Nascimento</Label>
                        <Input disabled={isEditable} value={client?.dob ? format(client?.dob, "yyyy-MM-dd", {locale: ptBR}) : 'Sem Registro'}
                               id="dob"
                               type="date"
                               {...register('dob')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="gender">Gênero</Label>
                        <Input disabled={isEditable} value={client?.gender?.toString()}
                               id="gender"
                               {...register('gender')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="zip_code">CEP</Label>
                        <Input disabled={isEditable} value={client?.zip_code?.toString()}
                               id="zip_code"
                               {...register('zip_code')}
                        />
                    </div>
                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="address">Endereço</Label>
                        <Textarea disabled={isEditable} value={client?.address?.toString()}
                                  id="address"
                                  {...register('address', {required: 'Campo obrigatório'})}

                        />
                        {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
                    </div>
                    <div className="space-y-2 col-span-full">
                        <Label htmlFor="observations">Observações</Label>
                        <Textarea disabled={isEditable} value={client?.observations?.toString()}
                                  id="observations"
                                  {...register('observations')}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox disabled={isEditable} value={client?.isBlock?.toString()}
                                  id="isBlock"
                                  {...register('isBlock')}
                        />
                        <Label htmlFor="isBlock">Bloqueado</Label>
                    </div>

                    <div className="col-span-3 space-y-2">
                        <Label htmlFor="blockReason">Motivo do Bloqueio</Label>
                        <Input disabled={isEditable} value={client?.blockReason?.toString()}
                               id="blockReason"
                               {...register('blockReason')}
                        />
                    </div>
                    <div className="space-y-2 col-start-3 col-span-2 ">
                        <Label htmlFor="observations">Anexar CNH</Label>
                        <Input  type="file" disabled={isEditable} value={client?.inputFile?.toString()}
                                  id="inputFile"
                                  {...register('inputFile')}
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