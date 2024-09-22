import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/Theme'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import CustomHeader from '../components/common/CustomHeader'
import SideBar from '../components/category/SideBar'
import { categories } from '../constants/dummyData'
import { useRoute } from '@react-navigation/native'

const ProductCategoriesScreen = () => {


    const route = useRoute()
    const data = route?.params?.data

    const [selectedCategory, setSelectedCategory] = useState(data || null)
    const [products, setProducts] = useState([])
    const [categoriesLoading, setCategoriesLoading] = useState(true)
    const [productsLoading, setProductsLoading] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <CustomSafeAreaView>
                <CustomHeader title={selectedCategory?.name || "Categories"} showSearch />
                <View style={styles.subContainer}>
                    <SideBar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryPress={(category) => setSelectedCategory(category)}
                    />
                </View>
            </CustomSafeAreaView>
        </View>
    )
}

export default ProductCategoriesScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row'
    }
})  