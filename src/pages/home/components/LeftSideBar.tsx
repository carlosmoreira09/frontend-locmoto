import { Shield, Wallet, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

export function LeftSidebar({ partnerInfo, contacts }: LeftSidebarProps) {
    return (
        <div className="space-y-6">
            <Card className="overflow-hidden">
                <div className="bg-amber-500 p-4">
                    <h3 className="text-lg font-bold text-white">{partnerInfo.name}</h3>
                    <p className="text-sm text-amber-100">{partnerInfo.description}</p>
                </div>
                <CardContent className="p-4 space-y-4">
                    <div className="flex justify-center py-4">
                        <img
                            src={partnerInfo.logo}
                            width={160}
                            height={80}
                            alt={`${partnerInfo.name} Logo`}
                            className="h-auto"
                        />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-amber-600" />
                            <span className="text-sm">Garantia de qualidade</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wallet className="h-4 w-4 text-amber-600" />
                            <span className="text-sm">Melhores preços</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-amber-600" />
                            <span className="text-sm">Atendimento 24h</span>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                        Conheça nossos modelos
                    </Button>
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
