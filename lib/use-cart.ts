'use client';

import { useCartContext } from './cart-context';

export function useCart() {
    return useCartContext();
}
