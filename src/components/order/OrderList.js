import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../utils/Theme'
import CustomText from '../common/CustomText'
import { useCartStore } from '../../state/CartStore'
import OrderItem from './OrderItem'

const OrderList = () => {

    const cartItems = useCartStore((state) => state.cart)
    const totalItems = cartItems?.reduce((acc, cart) => acc + cart?.count, 0) || 0

    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../assets/icons/clock.png")}
                        style={styles.clockImg}
                    />
                </View>
                <View>
                    <CustomText fontSize={17} fontFamily={fontFamily.bold}>
                        Delivery in 10 minutes
                    </CustomText>
                    <CustomText fontSize={11} style={{ opacity: 0.6 }}>
                        Shipment of {totalItems} {totalItems > 1 ? "items" : "item"}
                    </CustomText>
                </View>
            </View>

            {cartItems?.map((item, index) => (
                <OrderItem key={index} item={item} index={index} />
            ))}

        </View>
    )
}

export default OrderList

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 15,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        paddingBottom: 10
    },
    imageContainer: {
        width: 28,
        height: 28,
        padding: 2,
        borderRadius: 6,
        backgroundColor: colors.backgroundSecondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clockImg: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    }
})