import {ReactNode} from 'react'

interface ActivityItemProps {
    icon: ReactNode
    iconBgColor: string
    title: string
    description: string
    time: string
}

export function ActivityItem({ icon, iconBgColor, title, description, time }: ActivityItemProps) {
    return (
        <div className="flex items-start gap-4">
            <div className={`rounded-full p-2 ${iconBgColor}`}>
                {icon}
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
                <p className="text-xs text-muted-foreground">{time}</p>
            </div>
        </div>
    )
}
