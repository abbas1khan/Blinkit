import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../utils/Theme'
import { horizontalScale } from '../../utils/Scaling'
import CustomText from '../common/CustomText'
import UniversalAdd from '../common/UniversalAdd'

const OrderItem = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: item?.item?.image }}
                    style={styles.image}
                />
            </View>

            <View style={styles.contentContainer}>
                <CustomText fontSize={13} fontFamily={fontFamily.medium} numberOfLines={2}>
                    {item?.item?.name}
                </CustomText>
                <CustomText fontSize={12} numberOfLines={2} style={{ opacity: 0.5 }}>
                    {item?.item?.quantity}
                </CustomText>
            </View>

            <View style={styles.rightContainer}>
                <UniversalAdd item={item?.item} />
                <CustomText fontSize={13} fontFamily={fontFamily.medium}>
                    ₹{item?.count * item?.item?.price}
                </CustomText>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: colors.backgroundSecondary
    },
    imageContainer: {
        width: horizontalScale(72),
        height: horizontalScale(72),
        borderRadius: 15,
        borderWidth: 8,
        borderColor: colors.backgroundSecondary,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    contentContainer: {
        flex: 1,
        marginLeft: 12,
        marginRight: 20,
        gap: 2
    },
    rightContainer: {
        gap: 4,
        alignItems: 'flex-end'
    }
})