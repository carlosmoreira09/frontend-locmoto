import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface FeaturedBikeProps {
    name: string
    image: string
    price: string
}

export function FeaturedBike({ name, image, price }: FeaturedBikeProps) {
    return (
        <div className="space-y-3">
            <div className="relative rounded-md overflow-hidden">
                <img
                    src={image}
                    width={240}
                    height={120}
                    alt={name}
                    className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/70 to-transparent p-2">
                    <p className="text-white text-sm font-medium">{name}</p>
                </div>
            </div>
            <div className="flex justify-between text-sm">
                <span>Diária a partir de:</span>
                <span className="font-bold">{price}</span>
            </div>
            <Button size="sm" variant="outline" className="w-full">
                Ver detalhes
                <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    )
}
