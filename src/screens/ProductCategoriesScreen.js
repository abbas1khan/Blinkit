import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/Theme'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'

const ProductCategoriesScreen = () => {
    return (
        <View style={styles.container}>
            <CustomSafeAreaView>
                <Text>ProductCategoriesScreen</Text>
            </CustomSafeAreaView>
        </View>
    )
}

export default ProductCategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})  