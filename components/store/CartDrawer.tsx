'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '@/lib/use-cart';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: string, delta: number) => void;
    onRemove: (id: string) => void;
    subtotal: number;
}

export function CartDrawer({
    isOpen,
    onClose,
    items,
    onUpdateQuantity,
    onRemove,
    subtotal
}: CartDrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-card shadow-2xl"
                    >
                        <div className="flex items-center justify-between border-b border-white/10 p-6">
                            <h2 className="flex items-center gap-2 text-xl font-black uppercase italic tracking-tighter">
                                <ShoppingBag className="h-6 w-6 text-neon" />
                                Your <span className="text-neon">Cart</span>
                            </h2>
                            <button
                                onClick={onClose}
                                className="rounded-full p-2 hover:bg-white/5 transition-colors focus:outline-none"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center text-center space-y-4">
                                    <div className="rounded-full bg-white/5 p-8">
                                        <ShoppingBag className="h-12 w-12 text-muted-foreground opacity-20" />
                                    </div>
                                    <p className="text-muted-foreground font-medium">Your cart is empty.</p>
                                    <button
                                        onClick={onClose}
                                        className="text-neon text-sm font-black uppercase tracking-widest hover:underline"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-card-foreground/5">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/171717/ccff00?text=IMG';
                                                    }}
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col">
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm font-bold uppercase tracking-tight">{item.name}</h3>
                                                    <button
                                                        onClick={() => onRemove(item.id)}
                                                        className="text-muted-foreground hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-muted-foreground">{item.category}</p>
                                                <div className="mt-auto flex items-center justify-between">
                                                    <div className="flex items-center gap-3 rounded-md bg-white/5 px-2 py-1">
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, -1)}
                                                            className="text-muted-foreground hover:text-neon"
                                                        >
                                                            <Minus className="h-3 w-3" />
                                                        </button>
                                                        <span className="text-xs font-bold tabular-nums">{item.quantity}</span>
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, 1)}
                                                            className="text-muted-foreground hover:text-neon"
                                                        >
                                                            <Plus className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                    <span className="text-sm font-black italic tracking-tighter">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="border-t border-white/10 p-6 space-y-4 bg-white/[0.02]">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground uppercase tracking-widest font-medium">Subtotal</span>
                                    <span className="font-black italic tracking-tighter text-lg">${subtotal.toFixed(2)}</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">
                                    Shipping and taxes calculated at checkout
                                </p>
                                <button className="w-full rounded-lg bg-neon py-4 text-sm font-black uppercase tracking-[0.2em] text-black shadow-lg shadow-neon/20 transition-all hover:bg-neon-hover active:scale-[0.98]">
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
