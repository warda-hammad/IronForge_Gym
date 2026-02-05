'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface StoreHeaderProps {
    cartCount: number;
    onCartClick: () => void;
}

export function StoreHeader({ cartCount, onCartClick }: StoreHeaderProps) {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-neon transition-colors">
                        Home
                    </Link>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-sm font-bold uppercase tracking-wider">Store</span>
                </div>

                <h1 className="text-xl font-black uppercase italic tracking-tighter sm:text-2xl">
                    Elite <span className="text-neon">Supps & Gear</span>
                </h1>

                <button
                    onClick={onCartClick}
                    className="relative rounded-full p-2 hover:bg-white/5 transition-colors focus:outline-none"
                    aria-label="Open cart"
                >
                    <ShoppingCart className="h-6 w-6" />
                    {cartCount > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon text-[10px] font-bold text-black ring-2 ring-background">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
}
