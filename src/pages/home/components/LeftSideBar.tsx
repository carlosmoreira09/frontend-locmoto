import {FileText, AlertCircle, BikeIcon as Motorcycle} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {ActivityItem} from "@/pages/home/components/ActivityItem.tsx";

interface PartnerInfo {
    name: string
    description: string
    logo: string
}

interface ContactInfo {
    type: string
    number: string
}

interface LeftSidebarProps {
    partnerInfo: PartnerInfo
    contacts: ContactInfo[]
}

export function LeftSidebar({ contacts }: LeftSidebarProps) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Atividade Recente</CardTitle>
                    <CardDescription>Últimas 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ActivityItem
                        icon={<FileText className="h-4 w-4 text-amber-600" />}
                        iconBgColor="bg-amber-100"
                        title="Novo contrato assinado"
                        description="Cliente: João Silva - Yamaha MT-07"
                        time="Há 2 horas"
                    />
                    <ActivityItem
                        icon={<AlertCircle className="h-4 w-4 text-yellow-600" />}
                        iconBgColor="bg-yellow-100"
                        title="Nova multa registrada"
                        description="Moto: YBR-150 - Placa: ABC1234"
                        time="Há 5 horas"
                    />
                    <ActivityItem
                        icon={<Motorcycle className="h-4 w-4 text-green-600" />}
                        iconBgColor="bg-green-100"
                        title="Moto devolvida"
                        description="Cliente: Maria Oliveira - Yamaha Fazer 250"
                        time="Há 8 horas"
                    />
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Contatos Rápidos</CardTitle>
                    <CardDescription>Precisa de ajuda?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {contacts.map((contact, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <span className="text-sm font-medium">{contact.type}</span>
                            <span className="text-sm">{contact.number}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
