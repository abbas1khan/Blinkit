import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BouncePress from '../common/BouncePress'
import { navigate } from '../../utils/NavigationUtil'
import CustomText from '../common/CustomText'
import { colors, fontFamily } from '../../utils/Theme'
import { categories } from '../../constants/dummyData'

const CategoryContainer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>{renderItems(categories?.slice(0, 4))}</View>
            <View style={styles.row}>{renderItems(categories?.slice(4))}</View>
        </View>
    )
}

const renderItems = (items) => {
    return (
        (items?.map((item, index) => (
            <BouncePress
                key={index}
                onPress={() => { navigate("ProductCategoriesScreen") }}
                style={styles.item}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={item?.image}
                        style={styles.image}
                    />
                </View>
                <CustomText numberOfLines={2} fontSize={13} fontFamily={fontFamily.medium} style={{ textAlign: 'center' }}>
                    {item?.name}
                </CustomText>
            </BouncePress>
        )))
    )
}

export default CategoryContainer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 8,
        marginVertical: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 4
    },
    item: {
        flex: 1,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        padding: 4,
        backgroundColor: colors.background6,
        marginBottom: 6
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
})