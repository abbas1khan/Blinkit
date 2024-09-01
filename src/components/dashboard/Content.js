import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdCarousel from './AdCarousel'
import CategoryContainer from './CategoryContainer'

const Content = () => {
    return (
        <View style={{ width: '100%' }}>
            <View style={styles.AdContainer}>
                <AdCarousel />
            </View>
            <CategoryContainer title='Grocery & Kitchen' />
            <CategoryContainer title='Snacks & Drinks' />
            <CategoryContainer title='Beauty & Personal Care' />
            <CategoryContainer title='Bestsellers' />
            <CategoryContainer title='Household Essentials' />
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    AdContainer: {
        paddingHorizontal: 20,
    },
})