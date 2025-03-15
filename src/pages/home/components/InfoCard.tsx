import {ReactNode} from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

interface InfoCardProps {
    title: string
    description: string
    value: string | number
    icon: ReactNode
    borderColor: string
    trend?: {
        value: string
        label: string
        isPositive: boolean
    }
}

export function InfoCard({ title, description, value, icon, borderColor, trend }: InfoCardProps) {
    return (
        <Card className={`border-l-4 ${borderColor}`}>
            <CardHeader className="pb-2">
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{value}</span>
                    {icon}
                </div>
                {trend && (
                    <p className="text-xs text-muted-foreground mt-2">
            <span className={trend.isPositive ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
              {trend.value}
            </span>{' '}
                        {trend.label}
                    </p>
                )}
            </CardContent>
        </Card>
    )
}
