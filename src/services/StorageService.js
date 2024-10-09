import { tokenStorage } from "../state/storage";

export function getStoredItem(key) {
    if (!key) return null;
    return (tokenStorage.getString(key) ?? null)
}

export function removeStoredItem(key) {
    if (!key) return
    tokenStorage.delete(key)
}