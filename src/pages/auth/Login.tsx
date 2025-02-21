import React, { useState} from 'react'
import {AlertCircle, EyeIcon, EyeOff} from "lucide-react";
import logoClintia  from '../../assets/imagem-logo-grande.png'
import {Alert, AlertDescription, AlertTitle} from "../../components/ui/alert.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../components/ui/select.tsx"
import {Input} from "../../components/ui/input.tsx";
import {storeOptions} from "../../utils/fixedOptions.ts";
import { Button } from '../../components/ui/button.tsx';




const Login:React.FC = () => {

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [erro, setErro] = useState<string | null>(null)
    const [selectStore, setSelectedStore] = useState('')

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault()
        if(!identifier || !password || !selectStore)  {
            setErro('Preencha os dados de login e senha')
            return
        }
    }


    return (
        <div>

            <main className="min-h-screen flex">
                <div className="hidden sm:flex-1 bg-amber-800 sm:flex flex-col items-center justify-center p-8">
                    <div className="max-w-[600px] w-full space-y-1">
                        <img
                            src={logoClintia}
                            width={600}
                            height={300}
                            alt="Clintia Logo"
                            className="mx-auto bg-green-900 rounded-2xl"
                        />
                    </div>
                </div>
                <div className="flex-1 flex mt-10 sm:items-center justify-center p-8">
                    <div className="max-w-[500px] w-full space-y-6">
                        <div className="flex justify-center sm:hidden">
                            <img
                                src={logoClintia}
                                width={250}
                                height={200}
                                alt="Clintia Logo"
                                className="mx-auto rounded-full"
                            />
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="identifier" className="block text-sm text-black font-medium">
                                    Usuário
                                </label>
                                <Input
                                    id="identifier"
                                    type="text"
                                    placeholder="Digite seu Usuário"
                                    className="w-full p-5 rounded-full text-oxfordBlue placeholder:text-xs placeholder-gray-200 border-oxfordBlue"
                                    onChange={(e) => setIdentifier(e.target?.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm text-black font-medium">
                                    Senha
                                </label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Digite sua senha"
                                        className="w-full p-5 rounded-full text-oxfordBlue placeholder:text-xs placeholder-gray-200 border-oxfordBlue"
                                        onChange={(e) => setPassword(e.target?.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5"/>
                                        ) : (
                                            <EyeIcon className="h-5 w-5"/>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="store" className="block text-sm text-black font-medium">
                                    Selecione a loja
                                </label>
                                <Select value={selectStore} onValueChange={setSelectedStore}>
                                    <SelectTrigger
                                        className="w-full p-5 rounded-full text-oxfordBlue placeholder:text-xs placeholder-gray-200 border-oxfordBlue"
                                        id="store">
                                        <SelectValue placeholder="Selecione a loja"/>
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-200">
                                        {storeOptions.map((store) => (
                                            <SelectItem key={store.id} value={store.id.toString()}>
                                                {store.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex justify-center sm:justify-end">
                                <Button
                                    type="submit"
                                    className="w-1/2 rounded-full text-white bg-[#0B1A2B] hover:bg-[#152942]"
                                >
                                    Acessar
                                </Button>
                            </div>
                        </form>
                        <div>
                            {erro && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4"/>
                                    <AlertTitle>Erro</AlertTitle>
                                    <AlertDescription>{erro}</AlertDescription>
                                </Alert>
                            )}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;
