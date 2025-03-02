import { useState } from "react"
import { AlertCircle, Calendar, FileText, BikeIcon as Motorcycle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import logoClintia  from '../../assets/imagem-logo-grande.png'
import {LeftSidebar} from "@/pages/home/components/LeftSideBar.tsx";
import {InfoCard} from "@/pages/home/components/InfoCard.tsx";
import {ActivityItem} from "@/pages/home/components/ActivityItem.tsx";
import {RightSidebar} from "@/pages/home/components/RighSideBar.tsx";
import {Link} from "react-router-dom";

export default function HomePage() {
    const [activeTab, setActiveTab] = useState("dashboard")

    const partnerInfo = {
        name: "LocMotos - Locadora de Motos",
        description: "Parceiro Oficial",
        logo: logoClintia,
    }

    const contacts = [
        { type: "Emergência", number: "(11) 99999-9999" },
        { type: "Reservas", number: "(11) 88888-8888" },
        { type: "Suporte", number: "(11) 77777-7777" },
    ]

    const featuredBikes = [
        { name: "Yamaha MT-07", image: "/placeholder.svg?height=120&width=240", price: "R$ 180,00" },
        { name: "Yamaha Fazer 250", image: "/placeholder.svg?height=120&width=240", price: "R$ 120,00" },
    ]

    const rentalTips = [
        {
            title: "Documentos Necessários",
            items: ["CNH categoria A válida", "Documento de identidade", "Comprovante de residência", "Cartão de crédito"],
        },
        {
            title: "Benefícios da Locação",
            items: ["Seguro incluso", "Assistência 24h", "Manutenção inclusa", "Capacete gratuito"],
        },
    ]

    return (
        <div className="flex min-h-screen flex-col">
            {/* Main Content */}
            <main className="flex-1 container py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left Sidebar */}
                    <div className="md:col-span-3">
                        <LeftSidebar partnerInfo={partnerInfo} contacts={contacts} />
                    </div>

                    {/* Main Dashboard */}
                    <div className="md:col-span-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Filtrar
                                </Button>
                                <Button variant="outline" size="sm">
                                    <FileText className="mr-2 h-4 w-4" />
                                    Relatórios
                                </Button>
                            </div>
                        </div>

                        <Tabs value={activeTab} className="space-y-4" onValueChange={setActiveTab}>
                            <TabsList>
                                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                                <TabsTrigger value="contratos">Contratos</TabsTrigger>
                                <TabsTrigger value="multas">Multas</TabsTrigger>
                                <TabsTrigger value="cnh">CNH</TabsTrigger>
                            </TabsList>
                            <TabsContent value="dashboard" className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InfoCard
                                        title="Contratos Abertos"
                                        description="Ativos no momento"
                                        value={24}
                                        icon={<FileText className="h-8 w-8 text-amber-600" />}
                                        borderColor="border-l-amber-500"
                                        trend={{ value: "↑ 12%", label: "desde o mês passado", isPositive: true }}
                                    />
                                    <InfoCard
                                        title="Multas Pendentes"
                                        description="Aguardando pagamento"
                                        value={7}
                                        icon={<AlertCircle className="h-8 w-8 text-yellow-500" />}
                                        borderColor="border-l-yellow-500"
                                        trend={{ value: "↑ 3", label: "novas multas esta semana", isPositive: false }}
                                    />
                                    <InfoCard
                                        title="CNH a Expirar"
                                        description="Próximos 30 dias"
                                        value={5}
                                        icon={<User className="h-8 w-8 text-red-500" />}
                                        borderColor="border-l-red-500"
                                        trend={{ value: "Urgente:", label: "2 expiram esta semana", isPositive: false }}
                                    />
                                    <InfoCard
                                        title="Motos Disponíveis"
                                        description="Prontas para locação"
                                        value={18}
                                        icon={<Motorcycle className="h-8 w-8 text-green-500" />}
                                        borderColor="border-l-green-500"
                                        trend={{ value: "85%", label: "da frota disponível", isPositive: true }}
                                    />
                                </div>

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
                            </TabsContent>

                            <TabsContent value="contratos" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Contratos Ativos</CardTitle>
                                        <CardDescription>Detalhes de todos os contratos em aberto</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Visualize e gerencie todos os contratos ativos no momento.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="multas" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Multas Pendentes</CardTitle>
                                        <CardDescription>Detalhes de todas as multas não pagas</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Visualize e gerencie todas as multas pendentes de pagamento.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="cnh" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>CNH a Expirar</CardTitle>
                                        <CardDescription>Clientes com CNH próxima do vencimento</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Visualize e notifique clientes com CNH próxima da data de vencimento.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Sidebar */}
                    <div className="md:col-span-3">
                        <RightSidebar featuredBikes={featuredBikes} rentalTips={rentalTips} />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
                    <div className="flex items-center gap-2">
                        <Motorcycle className="h-5 w-5 text-amber-600" />
                        <span className="text-sm font-medium">MotoRent © 2025</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                            Termos de Uso
                        </Link>
                        <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                            Política de Privacidade
                        </Link>
                        <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
                            Contato
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

