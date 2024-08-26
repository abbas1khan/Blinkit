import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../utils/Theme'
import { changeNavigationColor } from '../utils/Helper'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import ProductSlider from '../components/login/ProductSlider'

const CustomerLoginScreen = () => {

    useEffect(() => {
        changeNavigationColor(colors.white)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>
            <CustomSafeAreaView>
                <ProductSlider />
            </CustomSafeAreaView>
        </View>
    )
}

export default CustomerLoginScreen

const styles = StyleSheet.create({})