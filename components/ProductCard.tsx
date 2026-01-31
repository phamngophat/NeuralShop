import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <Card className="overflow-hidden rounded-2xl border-none shadow-md transition-all hover:shadow-xl group hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
            <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden bg-neutral-100 flex items-center justify-center">
                    <div className="relative w-full h-full p-8">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-neutral-900 line-clamp-1">
                        {product.name}
                    </CardTitle>
                    <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-lg text-sm">
                        ${product.price.toFixed(2)}
                    </span>
                </div>
                <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>
            </CardContent>
            <CardFooter className="p-5 pt-0">
                <Button
                    onClick={onAddToCart}
                    className="w-full rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg shadow-neutral-500/20 active:scale-95 transition-transform"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}
