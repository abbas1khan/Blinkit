import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../utils/Theme'
import { changeNavigationColor } from '../utils/Helper'

const HomeScreen = () => {

    useEffect(() => {
        changeNavigationColor(colors.white)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>
            <StatusBar translucent backgroundColor={colors.transparent} barStyle={"dark-content"} />
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})