'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Info } from 'lucide-react';
import { Product } from '@/lib/mock-data';

interface ProductDetailModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}

export function ProductDetailModal({
    product,
    isOpen,
    onClose,
    onAddToCart
}: ProductDetailModalProps) {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-white/10 shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-white/10 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative aspect-square md:aspect-auto bg-black/20">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/800x800/171717/ccff00?text=' + encodeURIComponent(product.name);
                                    }}
                                />
                            </div>

                            {/* Details Section */}
                            <div className="p-8 md:p-12 flex flex-col">
                                <span className="mb-4 inline-block self-start rounded-full bg-neon/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-neon">
                                    {product.category}
                                </span>

                                <h2 className="mb-4 text-3xl font-black uppercase italic tracking-tighter sm:text-4xl">
                                    {product.name}
                                </h2>

                                <p className="mb-8 text-lg font-bold italic text-neon">
                                    ${product.price.toFixed(2)}
                                </p>

                                <div className="prose prose-invert mb-8">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {product.features && (
                                    <div className="mb-8">
                                        <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2">
                                            <Check className="h-4 w-4 text-neon" /> Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-neon" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Specifics: Nutritional Facts or Size Guide */}
                                <div className="mb-10 space-y-6">
                                    {product.nutritionalFacts && (
                                        <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                                            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2">
                                                <Info className="h-4 w-4 text-neon" /> Nutritional Facts
                                            </h3>
                                            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                                                {Object.entries(product.nutritionalFacts).map(([key, value]) => (
                                                    <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                                                        <span className="text-sm text-muted-foreground">{key}</span>
                                                        <span className="text-sm font-bold">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {product.sizeGuide && (
                                        <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                                            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2">
                                                <Info className="h-4 w-4 text-neon" /> Available Sizes
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {product.sizeGuide.map((size) => (
                                                    <span key={size} className="rounded-lg border border-white/10 px-4 py-2 text-sm font-bold hover:border-neon hover:text-neon transition-colors cursor-default">
                                                        {size}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => {
                                        onAddToCart(product);
                                        onClose();
                                    }}
                                    className="mt-auto w-full rounded-2xl bg-neon py-5 text-sm font-black uppercase tracking-[0.3em] text-black shadow-xl shadow-neon/20 transition-all hover:bg-neon-hover active:scale-[0.98]"
                                >
                                    Add to Cart — ${product.price.toFixed(2)}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
