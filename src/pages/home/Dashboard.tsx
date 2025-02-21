import { Card } from "../../components/ui/card"
import {Cards} from "./cards/Cards.tsx";


export default function Dashboard() {
    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard do Atendente</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-4">
                    <h2 className="text-lg text-amber-900 font-semibold mb-2">Contratos Ativos</h2>
                    <Cards />
                </Card>
                <Card className="p-4">
                    <h2 className="text-lg text-amber-900 font-semibold mb-2">Cauções a Expirar</h2>
                    <Cards />
                </Card>
                <Card className="p-4">
                    <h2 className="text-lg text-amber-900 font-semibold mb-2">CNHs Próximas de Expirar</h2>
                    <Cards />
                </Card>
                <Card className="p-4">
                    <h2 className="text-lg text-amber-900 font-semibold mb-2">Informações Adicionais</h2>
                    <Cards />
                </Card>
            </div>
        </main>
    )
}

