import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../utils/Theme'
import CustomHeader from '../components/common/CustomHeader'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import OrderList from '../components/order/OrderList'
import CustomText from '../components/common/CustomText'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const CheckoutScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <CustomSafeAreaView>
                <View style={styles.container}>
                    <CustomHeader title={"Checkout"} />
                    <View style={styles.container}>
                        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                            <View style={styles.flexRowBetween}>
                                <CustomText fontSize={13} fontFamily={fontFamily.semiBold}>
                                    Ordering for someone else?
                                </CustomText>

                                <CustomText fontSize={12} fontFamily={fontFamily.medium} color={colors.secondary}>
                                    Add details
                                </CustomText>
                            </View>

                            <OrderList />

                            <View style={styles.couponContainer}>
                                <View style={styles.couponBlueView}>
                                    <View style={styles.checkContainer}>
                                        <Ionicons name="checkmark-circle" size={32} color={colors.darkBlue4} />
                                    </View>
                                    <View>
                                        <CustomText fontSize={12} fontFamily={fontFamily.semiBold} color={colors.darkBlue3}>
                                            Yay! you got FREE Delivery
                                        </CustomText>
                                        <View style={styles.noCouponContainer}>
                                            <CustomText fontSize={12} fontFamily={fontFamily.medium} color={colors.dargGrey1}>
                                                No coupon needed
                                            </CustomText>
                                            <AntDesign name="caretright" size={8} color="black" style={{ bottom: -1.5, opacity: 0.3 }} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.seeAllContainer}>
                                    <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                        See all coupons
                                    </CustomText>
                                    <AntDesign name="caretright" size={8} color="black" style={{ bottom: -1.5, opacity: 0.7 }} />
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>
            </CustomSafeAreaView>
        </View>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 12,
        gap: 12,
        paddingBottom: 250
    },
    flexRowBetween: {
        backgroundColor: colors.white,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
    },
    couponContainer: {
        backgroundColor: colors.white,
        padding: 2,
        borderRadius: 15,
        overflow: 'hidden'
    },
    couponBlueView: {
        padding: 6,
        paddingBottom: 8,
        backgroundColor: colors.lightBlue1,
        borderRadius: 12,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    checkContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: colors.background9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seeAllContainer: {
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2
    },
    noCouponContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    }
})