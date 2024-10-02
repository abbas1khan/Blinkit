import { Image, InteractionManager, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fontFamily, hexToRgbA, sizes } from '../utils/Theme'
import CustomHeader from '../components/common/CustomHeader'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import OrderList from '../components/order/OrderList'
import CustomText from '../components/common/CustomText'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import BillDetails from '../components/order/BillDetails'
import { useCartStore } from '../state/CartStore'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'
import { horizontalScale } from '../utils/Scaling'
import CashSVG from '../assets/SVG_Components/CashSVG'
import { goBack } from '../utils/NavigationUtil'
import { useNavigation } from '@react-navigation/native'

const CheckoutScreen = () => {

    const { getTotalPrice, clearCart } = useCartStore()
    const totalItemPrice = getTotalPrice() || 0
    const cartItems = useCartStore((state) => state.cart)
    const navigation = useNavigation()


    const [locationName, setLocationName] = useState("Blinkit Pvt Ltd Ground Floor, Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram-122098, Haryana, India")


    async function getLocationName() {
        try {
            Geolocation.getCurrentPosition(async (info) => {
                const latitude = info?.coords?.latitude
                const longitude = info?.coords?.longitude
                if (latitude && longitude) {
                    axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=16&addressdetails=1`, { headers: { "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8" } })
                        .then(async (resp) => {
                            if (resp?.data?.display_name) {
                                setLocationName(resp?.data?.display_name)
                            }
                        })
                        .catch(async (err) => {
                            console.error("🚀 ~ file: Header.js:23 ~ Geolocation.getCurrentPosition ~ err:", err)
                        })
                }
            })
        } catch (error) {
            console.error("🚀 ~ file: CheckoutScreen.js:38 ~ getLocationName ~ error:", error)
        }
    }

    function onPlaceOrderPress() {
        navigation.replace("OrderSuccessScreen", { locationName })
    }



    useEffect(() => {
        if (cartItems?.length == 0) {
            goBack()
        }
    }, [cartItems])

    useEffect(() => {
        getLocationName()
    }, [])


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

                            {/* Coupons */}
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

                            <BillDetails totalItemPrice={totalItemPrice} />

                            {/* Cancellation Policy */}
                            <View style={styles.cancelContainer}>
                                <CustomText fontSize={13} fontFamily={fontFamily.semiBold}>
                                    Cancellation Policy
                                </CustomText>
                                <CustomText fontSize={12} fontFamily={fontFamily.medium} color={colors.text2}>
                                    Orders cannot be cancelled once packed for delivery, in case of unexpected delays, a refund will be provided, if applicable.
                                </CustomText>
                            </View>

                        </ScrollView>

                        {/* Payment */}
                        <View style={styles.bottomContainer}>
                            <View style={styles.addressContainer}>
                                <Image
                                    source={require("../assets/icons/home.png")}
                                    style={styles.homeImg}
                                />

                                <View style={styles.addressContent}>
                                    <CustomText fontSize={13} fontFamily={fontFamily.medium}>
                                        Delivering to{" "}
                                        <CustomText fontSize={13} fontFamily={fontFamily.semiBold}>
                                            Home
                                        </CustomText>
                                    </CustomText>
                                    <CustomText fontSize={12} fontFamily={fontFamily.medium} color={colors.text2} numberOfLines={2}>
                                        {locationName}
                                    </CustomText>
                                </View>

                                <CustomText fontSize={13} fontFamily={fontFamily.medium} color={colors.secondary}>
                                    Change
                                </CustomText>
                            </View>

                            <View style={styles.paymentContainer}>
                                <View style={styles.paymentLeftContainer}>
                                    <View style={styles.flexRow}>
                                        <View style={styles.cashIcon}>
                                            <CashSVG size={10} />
                                        </View>
                                        <View style={[styles.flexRow, { marginLeft: 8 }]}>
                                            <CustomText fontSize={11}>
                                                PAY USING
                                            </CustomText>
                                            <AntDesign name="caretright" size={9} color={colors.rgbaBlack(0.6)} style={{ transform: [{ rotate: '-90deg' }], marginLeft: 2, bottom: -2 }} />
                                        </View>
                                    </View>
                                    <CustomText fontSize={13} fontFamily={fontFamily.medium}>
                                        Cash on Delivery
                                    </CustomText>
                                </View>

                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { onPlaceOrderPress() }}
                                    style={styles.placeOrderContainer}
                                >
                                    <View>
                                        <CustomText fontSize={15} color={colors.white}>
                                            ₹{totalItemPrice + 2}
                                        </CustomText>
                                        <CustomText fontSize={11} color={colors.white}>
                                            TOTAL
                                        </CustomText>
                                    </View>
                                    <View style={styles.flexRow}>
                                        <CustomText fontSize={17} color={colors.white}>
                                            Place order{" "}
                                        </CustomText>
                                        <AntDesign name="caretright" size={9} color={colors.white} style={{ marginLeft: 1 }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

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
    },
    cancelContainer: {
        backgroundColor: colors.white,
        padding: 12,
        borderRadius: 15,
        gap: 4,
    },
    bottomContainer: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 0.5,
        borderColor: hexToRgbA(colors.text2, 0.5),
        borderBottomWidth: 0,
    },
    addressContainer: {
        paddingLeft: 16,
        paddingRight: 12,
        paddingTop: 10,
        paddingBottom: 12,
        flexDirection: 'row',
        borderBottomWidth: 0.7,
        borderColor: hexToRgbA(colors.text2, 0.5),
    },
    homeImg: {
        width: 28,
        height: 28,
        resizeMode: 'contain'
    },
    addressContent: {
        flex: 1,
        gap: 2,
        marginLeft: 16,
        marginRight: 12
    },
    borderBtmView: {
        height: 50,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 0.6,
        borderColor: hexToRgbA(colors.text2, 0.5),
        position: "absolute",
        zIndex: -1
    },
    paymentContainer: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paymentLeftContainer: {
        gap: 4,
    },
    placeOrderContainer: {
        backgroundColor: colors.secondary,
        height: 51,
        width: horizontalScale(205),
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 12
    },
    cashIcon: {
        width: 22,
        height: 16,
        borderWidth: 0.3,
        borderColor: hexToRgbA(colors.text2, 0.3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})