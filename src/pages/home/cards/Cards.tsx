import { useState, useEffect } from "react"

export function Cards() {
    const [activeContracts, setActiveContracts] = useState(0)

    useEffect(() => {
        // Aqui você faria uma chamada à API para obter o número real de contratos ativos
        // Por enquanto, vamos simular com um número aleatório
        setActiveContracts(Math.floor(Math.random() * 50) + 1)
    }, [])

    return <div className="text-3xl font-bold text-amber-900">{activeContracts}</div>
}
