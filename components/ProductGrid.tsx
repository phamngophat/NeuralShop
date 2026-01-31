import { ProductCard } from "./ProductCard";

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
            ))}
        </div>
    );
}
