import { Alert, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors, fontFamily, sizes } from '../utils/Theme'
import { changeNavigationColor } from '../utils/Helper'
import { resetAndNavigate } from '../utils/NavigationUtil'
import Geolocation from '@react-native-community/geolocation'
import { tokenStorage } from '../state/storage'

Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'always',
    enableBackgroundLocationUpdates: true,
    locationProvider: 'auto'
})

const SplashScreen = () => {

    const tokenCheck = async () => {
        const phoneNumber = tokenStorage.getString("phoneNumber")
        if (phoneNumber) {
            resetAndNavigate("ProductDashboardScreen")
        } else {
            resetAndNavigate("CustomerLoginScreen")
        }
        return false
    }

    async function fetchUserLocation() {
        try {
            Geolocation.requestAuthorization()
            tokenCheck()
        } catch (error) {
            Alert.alert("Sorry we need location service to give you better shopping experience")
        }
    }


    useEffect(() => {
        changeNavigationColor(colors.primary)
        const timeOutId = setTimeout(fetchUserLocation, 1000)
        return () => clearTimeout(timeOutId)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', }}>
            <StatusBar translucent backgroundColor={colors.transparent} barStyle={"dark-content"} />
            <Image
                source={require("../assets/images/splash_logo.jpeg")}
                style={{ width: sizes.width * 0.7, height: sizes.height * 0.7, resizeMode: 'contain' }}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})