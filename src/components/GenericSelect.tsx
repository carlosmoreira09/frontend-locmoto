import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface GenericSelectProps<T extends { id: string | number }> {
    items: T[]
    displayField: keyof T
    placeholder?: string
    defaultValue?: string | number
    onChange?: (value: string) => void
    className?: string
}

export default function GenericSelect<T extends { id: string | number }>({
                                                                             items,
                                                                             displayField,
                                                                             placeholder = "Selecione uma opção",
                                                                             defaultValue,
                                                                             onChange,
                                                                             className,
                                                                         }: GenericSelectProps<T>) {
    const [value, setValue] = useState<string>(defaultValue?.toString() || "")

    const handleValueChange = (newValue: string) => {
        setValue(newValue)
        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <Select value={value} onValueChange={handleValueChange}>
            <SelectTrigger className={className + ' rounded-full'}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-gray-100 rounded-xl">
                {items.map((item) => (
                    <SelectItem key={item.id} value={item.id?.toString()}>
                        {String(item[displayField])}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

