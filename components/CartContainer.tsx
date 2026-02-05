'use client';

import { useCart } from "@/lib/use-cart";
import { CartDrawer } from "@/components/store/CartDrawer";

export default function CartContainer() {
    const {
        items,
        isOpen,
        setIsOpen,
        updateQuantity,
        removeFromCart,
        subtotal
    } = useCart();

    return (
        <CartDrawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            items={items}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            subtotal={subtotal}
        />
    );
}
