import React, {useEffect, useState} from "react"
import {ChevronDown, Menu, Search, X} from "lucide-react"
import {Link} from "react-router-dom";
import logoClintia  from '../assets/imagem-logo-grande.png'
import {CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {ICreateClient} from "@/types/dto/clients.dto.ts";
import {findAllClientIDs} from "@/service/clients/clientService.ts";
import GenericSelect from "@/components/GenericSelect.tsx";

const menuItems = [
    {
        title: "Clientes",
        submenu: [
            {
                menuItem: "Cadastrar Cliente",
                endpoint: '/clients/add-client'
            },
            {
                menuItem: "Lista de Clientes",
                endpoint: '/clients'
            },
            {
                menuItem: "Lista de Motoristas",
                endpoint: '/drivers'
            }
        ],
    },    {
        title: "Motos",
        submenu: [

            {
                menuItem: "Adicionar Moto",
                endpoint: '/vehicles/add-vehicle'
            },
            {
                menuItem: "Lista de Motos",
                endpoint: '/vehicles'
            }],
    },
    {
        title: "Locação",
        submenu: [

            {
                menuItem: "Nova Locação",
                endpoint: 'new-contract'
            },
            {
                menuItem: "Devoluções",
                endpoint: 'end-contract'
            },
            {
                menuItem: "Reservas",
                endpoint: 'booking'
            }],
    },
    {
        title: "Multas",
        submenu: [
            {
            menuItem: "Cadastrar",
            endpoint: '/traffic-fines/add-fine'
            },
            {
                menuItem: "Listar",
                endpoint: '/traffic-fines'
            }],
    },
    {
        title: "Tabela de Preços",
        submenu: [
            {
                menuItem: "Cadastrar",
                endpoint: '/table-price/add-price'
            },
            {
                menuItem: "Tabela de Preços",
                endpoint: '/table-price'
            }],
    },
    {
        title: "Relatórios",
        submenu: [
            {
                menuItem: "Recibos",
                endpoint: "/receipts"
            },
            {
                menuItem: "Seguros",
                endpoint: '/insurances'
            },
            {
                menuItem: "Financeiro",
                endpoint: 'report-financial'
            },
            {
                menuItem: "Estoque",
                endpoint: 'report-vehicles'
            }],
    },
    {
        title: "Configurações do Contrato",
        submenu: [
            {
                menuItem: "Termos Padrão",
                endpoint: 'report-contracts'
            },
            {
                menuItem: "Cláusulas",
                endpoint: 'report-financial'
            },
            {
                menuItem: "Personalização",
                endpoint: 'report-vehicles'
            }],
    }
]

export default function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [clients, setClients] = useState<ICreateClient[]>([])

    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", searchTerm)
        setSearchTerm('')
    }
    const fetchClients = async () => {
        const result = await findAllClientIDs()
        if(result?.data) {
            setClients(result?.data || [])
        }
    }
    useEffect(() => {
        fetchClients().then()
    }, []);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <header className="h-56 from-yellow-400 bg-gradient-to-b via-amber-300 to-yellow-600 shadow-md">
            <div className="flex items-center">
                <div className="relative top-0 left-0 mt-8">
                    <img
                        src={logoClintia}
                        alt="Logo"
                        width={200}
                        height={140}
                        className="mt-5 ml-5 rounded-full"
                        onClick={() => navigate('/home')}
                    />
                </div>
                <div className="flex-1 flex justify-center mt-5">
                    <div className="w-1/2">
                        <CardHeader>
                            <CardTitle>Procure por Clientes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSearch} className="flex gap-4">
                                {/*<Input*/}
                                {/*    type="text"*/}
                                {/*    placeholder="Procure pelo nome, cpf ou cnpj"*/}
                                {/*    value={searchTerm}*/}
                                {/*    onChange={(e) => setSearchTerm(e.target.value)}*/}
                                {/*    className="h-12 flex-grow"*/}
                                {/*/>*/}
                                <GenericSelect items={clients} displayField="fullName" />
                                <Button className="cursor-pointer text-white bg-amber-700 rounded-full hover:bg-amber-800"
                                        type="submit" size="lg">
                                    <Search className="mr-2 h-4 w-4"/> Procurar
                                </Button>
                            </form>
                        </CardContent>
                    </div>
            </div>
        </div>
    <div className="flex justify-center mx-auto px-4">

        <div className="flex absolute top-45 h-16">

            <nav className="hidden lg:block">
                <ul className="flex space-x-2">
                    {menuItems.map((item) => (
                        <li
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => setActiveMenu(item.title)}
                        >
                            <Link
                                to="#"
                                className="text-amber-950 font-semibold text-base uppercase rounded-full hover:text-amber-300 px-4 py-2 transition duration-300 flex items-center"
                            >
                                {item.title}
                                <ChevronDown className="ml-1 h-4 w-4"/>
                            </Link>
                            {activeMenu === item.title && (
                                <div onMouseLeave={() => setActiveMenu(null)}
                                     className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                    <ul className="py-2">
                                        {item.submenu.map((subItem) => (
                                            <li key={subItem.menuItem}>

                                                <Link to={subItem.endpoint}
                                                              className="block px-4 capitalize py-2 text-sm text-gray-700 hover:bg-yellow-100">
                                                            {subItem.menuItem}
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
                                            <li key={subItem.menuItem}>
                                                <Link to={subItem.endpoint}
                                                      className="block text-sm text-gray-700 hover:text-yellow-600">
                                                    {subItem.menuItem}
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

