import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mmkvStorage } from './storage'

export const useAuthStore = create()(
    persist(
        (set, get) => ({
            user: null,
            currentOrder: null,
            setCurrentOrder: (order) => set({ currentOrder: order }),
            setUser: (data) => set({ user: data }),
            logout: () => set({ user: null, currentOrder: null })
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => mmkvStorage)
        }
    )
)