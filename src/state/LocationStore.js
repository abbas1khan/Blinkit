import { create } from 'zustand'

export const useLocationStore = create()(
    (set, get) => ({
        fullLocationName: "",
        setFullLocationName: (location) => set({ fullLocationName: location }),
    })
)