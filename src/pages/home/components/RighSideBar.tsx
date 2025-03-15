import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

interface RentalTip {
    title: string
    items: string[]
}

interface RightSidebarProps {
    featuredBikes: Array<{
        name: string
        image: string
        price: string
    }>
    rentalTips: RentalTip[]
}

export function RightSidebar({  rentalTips }: RightSidebarProps) {
    return (
        <div className="space-y-6">

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Dicas para Locação</CardTitle>
                    <CardDescription>Informações úteis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {rentalTips.map((tip, index) => (
                        <div key={index} className="space-y-2">
                            <h4 className="text-sm font-medium">{tip.title}</h4>
                            <ul className="text-sm space-y-1">
                                {tip.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
