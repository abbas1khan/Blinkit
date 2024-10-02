import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/Theme'
import ProductItem from './ProductItem'

const ProductList = ({ products = [], categoryImage = "" }) => {

    const renderItem = ({ item, index }) => {
        return (
            <ProductItem item={item} index={index} categoryImage={categoryImage} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item, index) => item?._id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
    },
    contentContainer: {
        paddingTop: 10,
        paddingBottom: 70
    }
})