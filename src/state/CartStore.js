import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mmkvStorage } from './storage'

export const useCartStore = create()(
    persist(
        (set, get) => ({
            cart: [],
            addItem: (item) => {
                const currentCart = get()?.cart
                const index = currentCart?.findIndex((cartItem) => cartItem?._id === item?._id)
                if (index >= 0) {
                    const updatedCart = [...currentCart]
                    updatedCart[index] = {
                        ...updatedCart[index],
                        count: updatedCart[index]?.count + 1
                    }
                    set({ cart: updatedCart })
                } else {
                    set({ cart: [...currentCart, { _id: item?._id, item: item, count: 1 }] })
                }
            },
            clearCart: () => {
                set({ cart: [] })
            },
            removeItem: (id) => {
                const currentCart = get()?.cart
                const index = currentCart?.findIndex((cartItem) => cartItem?._id === id)
                if (index >= 0) {
                    const updatedCart = [...currentCart]
                    const existingItem = updatedCart[index]
                    if (existingItem?.count > 1) {
                        updatedCart[index] = {
                            ...existingItem,
                            count: existingItem?.count - 1
                        }
                    } else {
                        updatedCart.splice(index, 1)
                    }
                    set({ cart: updatedCart })
                }
            },
            getItemCount: (id) => {
                const currentItem = get()?.cart?.find(cartItem => cartItem?._id === id)
                return currentItem ? currentItem?.count : 0
            },
            getTotalPrice: () => {
                return get()?.cart?.reduce((total, cartItem) => total + cartItem?.item?.price * cartItem?.count, 0)
            }
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => mmkvStorage)
        }
    )
)