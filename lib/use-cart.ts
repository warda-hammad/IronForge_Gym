'use client';

import { useCartContext, CartItem } from './cart-context';

export { type CartItem } from './cart-context';

export function useCart() {
    return useCartContext();
}
