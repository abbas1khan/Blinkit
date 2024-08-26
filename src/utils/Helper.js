import * as NavigationBar from "expo-navigation-bar";

export async function changeNavigationColor(color) {
    NavigationBar.setBackgroundColorAsync(color)
}