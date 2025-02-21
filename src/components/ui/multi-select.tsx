import * as React from "react"
import { X } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"

type Option = {
    value: string
    label: string
}

type MultiSelectProps = {
    options: Option[]
    selected: string[]
    onChange: (selected: string[]) => void
    placeholder?: string
}

export function MultiSelect({ options, selected, onChange, placeholder }: MultiSelectProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                    {selected.length > 0
                        ? `${selected.length} selecionado${selected.length > 1 ? "s" : ""}`
                        : placeholder || "Selecione os fornecedores"}
                    <X className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Buscar fornecedor..." />
                    <CommandList>
                        <CommandEmpty>Nenhum fornecedor encontrado.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    onSelect={() => {
                                        onChange(
                                            selected.includes(option.value)
                                                ? selected.filter((item) => item !== option.value)
                                                : [...selected, option.value],
                                        )
                                        setOpen(true)
                                    }}
                                >
                                    <div
                                        className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary ${
                                            selected.includes(option.value)
                                                ? "bg-primary text-primary-foreground"
                                                : "opacity-50 [&_svg]:invisible"
                                        }`}
                                    >
                                        <X className={selected.includes(option.value) ? "h-4 w-4" : "h-3 w-3"} />
                                    </div>
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

