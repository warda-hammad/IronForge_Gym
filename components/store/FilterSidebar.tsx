'use client';

import { Category } from '@/lib/mock-data';
import { Search, X } from 'lucide-react';

interface FilterSidebarProps {
    selectedCategories: Category[];
    onCategoryChange: (category: Category) => void;
    priceRange: [number, number];
    onPriceRangeChange: (range: [number, number]) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    isOpen?: boolean;
    onClose?: () => void;
}

const CATEGORIES: Category[] = ['Supplements', 'Apparel', 'Equipment'];

export function FilterSidebar({
    selectedCategories,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    searchQuery,
    onSearchChange,
    isOpen,
    onClose
}: FilterSidebarProps) {
    return (
        <aside className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-card p-6 border-r border-white/10 transition-transform duration-300 lg:relative lg:translate-x-0 lg:bg-transparent lg:border-none lg:p-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
            <div className="flex items-center justify-between mb-8 lg:hidden">
                <h2 className="text-xl font-bold uppercase tracking-tighter italic">Filters</h2>
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full">
                    <X className="h-5 w-5" />
                </button>
            </div>

            <div className="space-y-10">
                {/* Search */}
                <div>
                    <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-neon/70">Search Products</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Whey protein..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full rounded-lg bg-card-foreground/5 border border-white/5 py-2 pl-10 pr-4 text-sm focus:border-neon focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-neon/70">Category</h3>
                    <div className="space-y-3">
                        {CATEGORIES.map((category) => (
                            <label key={category} className="flex cursor-pointer items-center group">
                                <div className="relative flex h-5 w-5 items-center justify-center">
                                    <input
                                        type="checkbox"
                                        className="peer hidden"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => onCategoryChange(category)}
                                    />
                                    <div className="h-4 w-4 rounded border border-white/20 transition-all peer-checked:bg-neon peer-checked:border-neon group-hover:border-neon/50"></div>
                                    <X className="absolute h-3 w-3 text-black opacity-0 transition-opacity peer-checked:opacity-100" strokeWidth={4} />
                                </div>
                                <span className="ml-3 text-sm font-medium transition-colors group-hover:text-neon">
                                    {category}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-neon/70">Price Range</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm font-bold">
                            <span>${priceRange[0]}</span>
                            <span className="text-neon">—</span>
                            <span>${priceRange[1]}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="500"
                            step="10"
                            value={priceRange[1]}
                            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/5 accent-neon"
                        />
                    </div>
                </div>

                {/* Reset */}
                <button
                    onClick={() => {
                        onPriceRangeChange([0, 500]);
                        onSearchChange('');
                        // Optional: reset categories
                    }}
                    className="w-full rounded-lg border border-white/5 bg-white/5 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10"
                >
                    Reset Filters
                </button>
            </div>
        </aside>
    );
}
