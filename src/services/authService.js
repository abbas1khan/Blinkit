import { useAuthStore } from "../state/authStore"
import { tokenStorage } from "../state/storage"

export const customerLogin = async (phone) => {
    try {
        tokenStorage.set("accessToken", phone)
        tokenStorage.set("refreshToken", phone)
        const { setUser } = useAuthStore.getState()
        setUser({
            name: "Abbas Khan",
            phone: phone
        })
    } catch (error) {
        console.error("🚀 ~ file: authService.js:9 ~ customerLogin ~ error:", error)
    }
}