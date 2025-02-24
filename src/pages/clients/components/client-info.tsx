import React from 'react';
import {ICreateClient} from "@/types/dto/clients.dto.ts";
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";
import {
    User,
    FileText,
    Calendar,
    Phone,
    Mail,
    Flag,
    Heart,
    Briefcase,
    UserCheck,
    MapPin,
    Lock,
    AlertTriangle,
    FileSignature,
} from "lucide-react"
interface InfoItemProps {
    icon: React.ElementType
    label: string
    value?: string | Date | null
    span?: string
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, label, value, span = "" }) => (
    <div className={`space-y-2 ${span}`}>
        <div className="flex items-center space-x-2">
            <Icon className="w-5 h-5 text-yellow-950" />
            <p className="text-sm font-medium text-amber-950">{label}</p>
        </div>
        <p className="text-base text-amber-900 pl-7">{value?.toString()}</p>
    </div>
)
interface ClientInfoCardProps {
    client: ICreateClient
}

const ClientInfo: React.FC<ClientInfoCardProps> = ({ client }) => {

    return (
                <Card className="w-full mx-auto text-amber-950">
                    <CardHeader>
                        <CardTitle className="text-2xl text-amber-950">Informações do Cliente</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InfoItem icon={User} label="Person Type" value={client.personType} />
                        <InfoItem icon={User} label="Full Name" value={client.fullName} span="md:col-span-2" />
                        <InfoItem icon={FileText} label="Document" value={client.document} />
                        { (client.personType == 'PF') && (
                            <>
                                <InfoItem icon={FileText} label="RG" value={client.rg} />
                                <InfoItem icon={Calendar} label="RG Emit Date" value={client.rgEmitDate ? format(client.rgEmitDate, "dd/MM/yyyy", {locale: ptBR}) : 'Sem Registro'} />
                                <InfoItem icon={Calendar} label="RG Expired" value={client.rgExpired ? format(client.rgExpired, "dd/MM/yyyy", {locale: ptBR}) : 'Sem Registro'} />
                                <InfoItem icon={Briefcase} label="RG Emit By" value={client.rgEmitBy} />
                                <InfoItem icon={FileText} label="RG" value={client.rg ? client.rg : 'Sem RG Cadastrado'}/>
                            </>
                        )}
                        <InfoItem icon={Phone} label="Phone" value={client.phone} />
                        <InfoItem icon={Mail} label="Email" value={client.email} span="md:col-span-2" />
                        <InfoItem icon={Flag} label="Nationality" value={client.nacionality} />
                        <InfoItem icon={Heart} label="Marital Status" value={client.maritalStatus} />
                        <InfoItem icon={FileText} label="State Register" value={client.stateRegister} />
                        <InfoItem icon={Calendar} label="Date of Birth" value={client.dob ? format(client.dob, "dd/MM/yyyy", { locale: ptBR}) : 'Sem Registro'} />
                        <InfoItem icon={UserCheck} label="Gender" value={client.gender} />
                        <InfoItem icon={Lock} label="Blocked" value={client.isBlock ? "Yes" : "No"} />
                        {client.isBlock && (
                            <InfoItem icon={AlertTriangle} label="Block Reason" value={client.blockReason} span="md:col-span-2" />
                        )}
                        <InfoItem icon={MapPin} label="Address" value={client.address} span="md:col-span-2" />
                        <InfoItem icon={MapPin} label="ZIP Code" value={client.zip_code} />
                        <InfoItem icon={FileSignature} label="Observations" value={client.observations} span="col-span-full" />
                    </CardContent>
                </Card>
    );
};

export default ClientInfo;