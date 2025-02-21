import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import {Link} from "react-router-dom";
import logoClintia  from '../assets/imagem-logo-grande.png'

const menuItems = [
    {
        title: "Cadastros",
        submenu: ["Clientes", "Motos", "Funcionários"],
    },
    {
        title: "Locação",
        submenu: ["Nova Locação", "Devoluções", "Reservas"],
    },
    {
        title: "Multas",
        submenu: ["Cadastrar", "Listar"],
    },
    {
        title: "Tabela de Preços",
        submenu: ["Diárias", "Pacotes", "Promoções"],
    },
    {
        title: "Relatórios",
        submenu: ["Locações", "Financeiro", "Estoque"],
    },
    {
        title: "Configurações do Contrato",
        submenu: ["Termos Padrão", "Cláusulas", "Personalização"],
    }
]

export default function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <header className=" h-48 from-yellow-400 bg-gradient-to-bl via-yellow-500 to-yellow-400 shadow-md">
            <div className="flex items-center">
                <img src={logoClintia} alt="Logo" width={200} height={140}
                     className="mt-5 ml-5 rounded-full"/>
            </div>
            <div className="flex justify-center mx-auto px-4">

                <div className="flex absolute top-35  h-16">

                    <nav className="hidden lg:block">
                        <ul className="flex space-x-2">
                            {menuItems.map((item) => (
                                <li
                                    key={item.title}
                                    className="relative"
                                    onMouseEnter={() => setActiveMenu(item.title)}
                                    onMouseLeave={() => setActiveMenu(item.title)}
                                >
                                    <Link
                                        to="#"
                                        className="text-amber-950 font-semibold text-base uppercase rounded-full hover:text-amber-300 px-4 py-2 transition duration-300 flex items-center"
                                    >
                                        {item.title}
                                        <ChevronDown className="ml-1 h-4 w-4"/>
                                    </Link>
                                    {activeMenu === item.title && (
                                        <div
                                            className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                            <ul className="py-2">
                                                {item.submenu.map((subItem) => (
                                                    <li key={subItem}>
                                                        <Link to="#"
                                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100">
                                                            {subItem}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-white">
                            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white">
                    <ul className="px-2 pt-2 pb-4 space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.title}>
                                <button
                                    onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                                    className="w-full text-left text-gray-800 hover:bg-yellow-100 px-3 py-2 rounded transition duration-300"
                                >
                                    {item.title}
                                </button>
                                {activeMenu === item.title && (
                                    <ul className="pl-4 mt-2 space-y-2">
                                        {item.submenu.map((subItem) => (
                                            <li key={subItem}>
                                                <Link to="#"
                                                      className="block text-sm text-gray-700 hover:text-yellow-600">
                                                    {subItem}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

