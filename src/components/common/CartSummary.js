import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCartStore } from '../../state/CartStore'
import { colors, fontFamily, sizes } from '../../utils/Theme'
import BouncePress from './BouncePress'
import CustomText from './CustomText'
import { navigate } from '../../utils/NavigationUtil'
import { Feather } from '@expo/vector-icons'
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const CartSummary = () => {

    const cart = useCartStore((state) => state.cart)
    const total = cart?.reduce((acc, cart) => acc + cart?.count, 0)


    const [cartItems, setCartItems] = useState([])
    const [totalItems, setTotalItems] = useState(0)


    const translateY = useSharedValue(65)
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }))


    useEffect(() => {
        if (cart?.length > 0) {
            setCartItems(cart)
            translateY.value = withTiming(0, { duration: 300 });
        } else {
            translateY.value = withTiming(65, { duration: 300 });
        }
    }, [cart])

    useEffect(() => {
        if (total > 0) {
            setTotalItems(total)
        }
    }, [total])


    return (
        <Reanimated.View style={[styles.mainContainer, animatedStyle]}>
            <BouncePress
                onPress={() => { navigate("CheckoutScreen") }}
                style={styles.container}
            >
                <View style={styles.imagesContainer}>
                    {cartItems?.slice(-3)?.map((item, index) => (
                        <View key={`item-${index}`} style={[styles.imageView, { marginLeft: index > 0 ? -22 : 0 }]}>
                            <Image
                                source={{ uri: item?.item?.image }}
                                style={styles.image}
                            />
                        </View>
                    ))}
                </View>

                <View style={styles.textContainer}>
                    <CustomText fontSize={15} fontFamily={fontFamily.semiBold} color={colors.white} style={{ letterSpacing: 0.4 }}>
                        View cart
                    </CustomText>
                    <CustomText fontSize={12} color={colors.white}>
                        {totalItems}{" "}{totalItems > 1 ? "ITEMS" : "ITEM"}
                    </CustomText>
                </View>

                <View style={styles.arrowContainer}>
                    <Feather name="chevron-right" size={22} color={colors.white} />
                </View>
            </BouncePress>
        </Reanimated.View>
    )
}

export default CartSummary

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 10,
        borderRadius: 80,
    },
    container: {
        height: 54,
        borderRadius: 80,
        backgroundColor: colors.secondary,
        paddingVertical: 12,
        paddingLeft: 6,
        paddingRight: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 8,
        marginRight: 10,
        top: -1
    },
    imageView: {
        width: 42,
        height: 42,
        borderRadius: 42,
        backgroundColor: colors.secondary,
        padding: 2
    },
    image: {
        flex: 1,
        borderRadius: 42,
    },
    imagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowContainer: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: colors.secondary2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})