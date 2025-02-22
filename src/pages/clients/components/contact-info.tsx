import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function ContactInfo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" placeholder="Nome completo" />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@exemplo.com" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Telefone</Label>
                            <Input id="phone" placeholder="(00) 00000-0000" />
                        </div>
                        <div>
                            <Label htmlFor="address">Endereço</Label>
                            <Input id="address" placeholder="Rua, número, bairro" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

