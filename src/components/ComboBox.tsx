"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {ICreateClient} from "@/types/dto/clients.dto.ts";

const highlightMatch = (text: string, searchTerm: string) => {
    if (!searchTerm) return text

    const lowerText = text.toLowerCase()
    const lowerSearchTerm = searchTerm.toLowerCase()

    if (!lowerText.includes(lowerSearchTerm)) return text

    const index = lowerText.indexOf(lowerSearchTerm)
    const before = text.substring(0, index)
    const match = text.substring(index, index + searchTerm.length)
    const after = text.substring(index + searchTerm.length)

    return (
        <>
            {before}
            <span className="bg-yellow-200 dark:bg-yellow-800">{match}</span>
            {after}
        </>
    )
}

export default function ComboboxDemo({ pessoas }: { pessoas: ICreateClient[] }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [searchTerm, setSearchTerm] = React.useState("")

    // Filtra as pessoas com base no termo de busca em múltiplos campos
    const filteredPeople = React.useMemo(() => {
        if (!searchTerm) return pessoas

        const lowerSearchTerm = searchTerm.toLowerCase()

        return pessoas.filter(
            (pessoa) =>
                pessoa.fullName.toLowerCase().includes(lowerSearchTerm) ||
                pessoa.document.toLowerCase().includes(lowerSearchTerm) ||
                pessoa.email.toLowerCase().includes(lowerSearchTerm) ||
                pessoa.phone.toLowerCase().includes(lowerSearchTerm),
        )
    }, [searchTerm])

    return (
        <div className="w-full max-w-md mx-auto">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between ">
                        {value ? pessoas.find((pessoa) => pessoa.id === value)?.fullName : "Selecione uma pessoa..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 bg-gray-100 rounded-2xl">
                    <Command className="bg-gray-100 rounded-2xl w-full">
                        <CommandInput
                            placeholder="Buscar por nome, CNPJ, email ou telefone..."
                            value={searchTerm}
                            onValueChange={setSearchTerm}
                            className="w-full"
                        />
                        <CommandList className="w-full">
                            <CommandEmpty className="w-full">Nenhuma pessoa encontrada.</CommandEmpty>
                            <CommandGroup>
                                {filteredPeople.map((pessoa) => (
                                    <CommandItem
                                        key={pessoa.id}
                                        value={pessoa.id}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check className={cn("mr-2 h-4 w-4", value === pessoa.id ? "opacity-100" : "opacity-0")} />
                                        <div className="flex flex-col">
                                            <span>{searchTerm ? highlightMatch(pessoa.fullName, searchTerm) : pessoa.id}</span>
                                            <span className="text-xs text-muted-foreground">
                        {searchTerm && pessoa.fullName.toLowerCase().includes(searchTerm.toLowerCase())
                            ? highlightMatch(pessoa.fullName, searchTerm)
                            : pessoa.fullName}{" "}
                                                •
                                                {searchTerm && pessoa.email.toLowerCase().includes(searchTerm.toLowerCase())
                                                    ? highlightMatch(pessoa.email, searchTerm)
                                                    : pessoa.email}{" "}
                                                •
                                                {searchTerm && pessoa.phone.toLowerCase().includes(searchTerm.toLowerCase())
                                                    ? highlightMatch(pessoa.phone, searchTerm)
                                                    : pessoa.phone}
                      </span>
                                        </div>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}

