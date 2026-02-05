'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { ProductCard } from '@/components/store/ProductCard';
import { FilterSidebar } from '@/components/store/FilterSidebar';
import { CartDrawer } from '@/components/store/CartDrawer';
import { ProductDetailModal } from '@/components/store/ProductDetailModal';

import { PRODUCTS, Category, Product } from '@/lib/mock-data';
import { useCart } from '@/lib/use-cart';

export default function StorePage() {
    const {
        items: cartItems,
        isOpen: isCartOpen,
        setIsOpen: setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
        totalItems
    } = useCart();

    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const toggleCategory = (category: Category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter((product) => {
            const matchesCategory =
                selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const matchesPrice =
                product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesSearch =
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesPrice && matchesSearch;
        });
    }, [selectedCategories, priceRange, searchQuery]);

    return (
        <div className="min-h-screen bg-background text-foreground pt-16">

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-10 lg:flex-row">
                    {/* Desktop Filter Sidebar */}
                    <div className="hidden w-72 flex-shrink-0 lg:block">
                        <FilterSidebar
                            selectedCategories={selectedCategories}
                            onCategoryChange={toggleCategory}
                            priceRange={priceRange}
                            onPriceRangeChange={setPriceRange}
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                        />
                    </div>

                    {/* Store Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-neon/70">
                                    {filteredProducts.length} Results
                                </h2>
                                {selectedCategories.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {selectedCategories.map((cat) => (
                                            <span
                                                key={cat}
                                                className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] font-bold uppercase"
                                            >
                                                {cat}
                                                <button
                                                    onClick={() => toggleCategory(cat)}
                                                    className="hover:text-neon"
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ))}
                                        <button
                                            onClick={() => setSelectedCategories([])}
                                            className="text-[10px] font-bold uppercase text-muted-foreground hover:text-neon"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Filter Toggle */}
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="flex items-center justify-center gap-2 rounded-xl bg-card border border-white/5 px-6 py-3 text-sm font-black uppercase tracking-widest transition-all hover:bg-white/5 active:scale-95 lg:hidden"
                            >
                                <Filter className="h-4 w-4" />
                                Filters
                            </button>
                        </div>

                        {/* Product Grid */}
                        {filteredProducts.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 py-32 text-center">
                                <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground opacity-20" />
                                <h3 className="text-xl font-bold uppercase tracking-tighter">No products found</h3>
                                <p className="mt-2 text-muted-foreground">Try adjusting your filters or search terms.</p>
                                <button
                                    onClick={() => {
                                        setSelectedCategories([]);
                                        setPriceRange([0, 500]);
                                        setSearchQuery('');
                                    }}
                                    className="mt-6 font-bold text-neon hover:underline"
                                >
                                    Reset all filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                {filteredProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onViewDetails={setSelectedProduct}
                                        onAddToCart={addToCart}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Mobile Overlays */}
            <AnimatePresence>
                {isFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFilterOpen(false)}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden"
                        >
                            <FilterSidebar
                                selectedCategories={selectedCategories}
                                onCategoryChange={toggleCategory}
                                priceRange={priceRange}
                                onPriceRangeChange={setPriceRange}
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                isOpen={true}
                                onClose={() => setIsFilterOpen(false)}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


            <ProductDetailModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAddToCart={addToCart}
            />

            {/* Floating Back to Home button for convenience */}
            <Link
                href="/"
                className="fixed bottom-8 left-8 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white transition-all hover:bg-neon hover:text-black hover:scale-110 lg:hidden"
            >
                <ArrowLeft className="h-6 w-6" />
            </Link>
        </div>
    );
}
