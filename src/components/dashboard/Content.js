import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdCarousel from './AdCarousel'

const Content = () => {
    return (
        <View style={styles.container}>
            <AdCarousel />
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})