import { useState } from "react"
import {
    AlertCircle,
    Calendar,
    ChevronRight,
    Clock,
    FileText,
    BikeIcon as Motorcycle,
    Shield,
    User,
    Wallet,
} from "lucide-react"
import logoClintia  from '../../assets/imagem-logo-grande.png'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Link} from "react-router-dom";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("dashboard")

    return (
        <div>
            {/* Main Content */}
            <main className="flex-1 container py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left Sidebar */}
                    <div className="md:col-span-3 space-y-6">
                        <Card className="overflow-hidden">
                            <div className="bg-amber-500 p-4">
                                <h3 className="text-lg font-bold text-white">Yamaha Motos</h3>
                                <p className="text-sm text-amber-100">Parceiro Oficial</p>
                            </div>
                            <CardContent className="p-4 space-y-4">
                                <div className="flex justify-center py-4">
                                    <img
                                        src={logoClintia}
                                        width={160}
                                        height={80}
                                        alt="Yamaha Logo"
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
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">Emergência</span>
                                    <span className="text-sm">(11) 99999-9999</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">Reservas</span>
                                    <span className="text-sm">(11) 88888-8888</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">Suporte</span>
                                    <span className="text-sm">(11) 77777-7777</span>
                                </div>
                            </CardContent>
                        </Card>
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

                        <Tabs defaultValue="dashboard" className="space-y-4" onValueChange={setActiveTab}>
                            <TabsList>
                                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                                <TabsTrigger value="contratos">Contratos</TabsTrigger>
                                <TabsTrigger value="multas">Multas</TabsTrigger>
                                <TabsTrigger value="cnh">CNH</TabsTrigger>
                            </TabsList>
                            <TabsContent value="dashboard" className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Card className="border-l-4 border-l-amber-500">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">Contratos Abertos</CardTitle>
                                            <CardDescription>Ativos no momento</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold">24</span>
                                                <FileText className="h-8 w-8 text-amber-600" />
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                <span className="text-green-500 font-medium">↑ 12%</span> desde o mês passado
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-l-4 border-l-yellow-500">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">Multas Pendentes</CardTitle>
                                            <CardDescription>Aguardando pagamento</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold">7</span>
                                                <AlertCircle className="h-8 w-8 text-yellow-500" />
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                <span className="text-red-500 font-medium">↑ 3</span> novas multas esta semana
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-l-4 border-l-red-500">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">CNH a Expirar</CardTitle>
                                            <CardDescription>Próximos 30 dias</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold">5</span>
                                                <User className="h-8 w-8 text-red-500" />
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                <span className="text-red-500 font-medium">Urgente:</span> 2 expiram esta semana
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-l-4 border-l-green-500">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">Motos Disponíveis</CardTitle>
                                            <CardDescription>Prontas para locação</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold">18</span>
                                                <Motorcycle className="h-8 w-8 text-green-500" />
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                <span className="text-green-500 font-medium">85%</span> da frota disponível
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Atividade Recente</CardTitle>
                                        <CardDescription>Últimas 24 horas</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full p-2 bg-amber-100">
                                                <FileText className="h-4 w-4 text-amber-600" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium">Novo contrato assinado</p>
                                                <p className="text-xs text-muted-foreground">Cliente: João Silva - Yamaha MT-07</p>
                                                <p className="text-xs text-muted-foreground">Há 2 horas</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full p-2 bg-yellow-100">
                                                <AlertCircle className="h-4 w-4 text-yellow-600" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium">Nova multa registrada</p>
                                                <p className="text-xs text-muted-foreground">Moto: YBR-150 - Placa: ABC1234</p>
                                                <p className="text-xs text-muted-foreground">Há 5 horas</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full p-2 bg-green-100">
                                                <Motorcycle className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium">Moto devolvida</p>
                                                <p className="text-xs text-muted-foreground">Cliente: Maria Oliveira - Yamaha Fazer 250</p>
                                                <p className="text-xs text-muted-foreground">Há 8 horas</p>
                                            </div>
                                        </div>
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
                    <div className="md:col-span-3 space-y-6">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle>Modelos em Destaque</CardTitle>
                                <CardDescription>Nossas motos mais populares</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="relative rounded-md overflow-hidden">
                                        <img
                                            src={logoClintia}
                                            width={240}
                                            height={120}
                                            alt="Yamaha MT-07"
                                            className="w-full h-auto"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/70 to-transparent p-2">
                                            <p className="text-white text-sm font-medium">Yamaha MT-07</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Diária a partir de:</span>
                                        <span className="font-bold">R$ 180,00</span>
                                    </div>
                                    <Button size="sm" variant="outline" className="w-full">
                                        Ver detalhes
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="space-y-3">
                                    <div className="relative rounded-md overflow-hidden">
                                        <img
                                            src={logoClintia}
                                            width={240}
                                            height={120}
                                            alt="Yamaha Fazer 250"
                                            className="w-full h-auto"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/70 to-transparent p-2">
                                            <p className="text-white text-sm font-medium">Yamaha Fazer 250</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Diária a partir de:</span>
                                        <span className="font-bold">R$ 120,00</span>
                                    </div>
                                    <Button size="sm" variant="outline" className="w-full">
                                        Ver detalhes
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle>Dicas para Locação</CardTitle>
                                <CardDescription>Informações úteis</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium">Documentos Necessários</h4>
                                    <ul className="text-sm space-y-1">
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>CNH categoria A válida</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>Documento de identidade</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>Comprovante de residência</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>Cartão de crédito</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium">Benefícios da Locação</h4>
                                    <ul className="text-sm space-y-1">
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>Seguro incluso</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>Assistência 24h</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>Manutenção inclusa</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            <span>Capacete gratuito</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
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

