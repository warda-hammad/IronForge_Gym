'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/mock-data';
import { Plus } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    onViewDetails: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-card/50 transition-all hover:bg-card hover:shadow-2xl hover:shadow-neon/10"
        >
            <div
                className="relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => onViewDetails(product)}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/171717/ccff00?text=' + encodeURIComponent(product.name);
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-neon">View Details</span>
                </div>
                <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                        {product.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 text-lg font-bold leading-tight group-hover:text-neon transition-colors cursor-pointer" onClick={() => onViewDetails(product)}>
                    {product.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground flex-1">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-black italic tracking-tighter">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={() => onAddToCart(product)}
                        className="flex items-center gap-1 rounded-lg bg-neon px-4 py-2 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-neon-hover active:scale-95 shadow-lg shadow-neon/20 hover:shadow-neon/40"
                    >
                        <Plus className="h-3.5 w-3.5" />
                        Add
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
