import { InteractionManager, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import { colors, fontFamily, sizes } from '../utils/Theme'
import LottieView from 'lottie-react-native'
import CustomText from '../components/common/CustomText'
import { useRoute } from '@react-navigation/native'
import { useCartStore } from '../state/CartStore'
import { navigate } from '../utils/NavigationUtil'

const OrderSuccessScreen = () => {

    const route = useRoute()
    const locationName = route?.params?.locationName || ""


    const { clearCart } = useCartStore()


    useEffect(() => {
        let timeOut
        InteractionManager.runAfterInteractions(() => {
            clearCart()
            timeOut = setTimeout(() => {
                navigate("ProductDashboardScreen")
            }, 2300);
        })

        return () => {
            clearTimeout(timeOut)
        }
    }, [])

    return (
        <View style={styles.mainContainer}>
            <CustomSafeAreaView>
                <View style={styles.orderSuccessContainer}>

                    <LottieView
                        autoPlay={true}
                        duration={2000}
                        speed={1}
                        enableMergePathsAndroidForKitKatAndAbove={true}
                        loop={false}
                        hardwareAccelerationAndroid
                        source={require("../assets/animations/confirm.json")}
                        style={styles.lottieView}
                    />

                    <CustomText fontSize={12} fontFamily={fontFamily.semiBold} style={{ opacity: 0.4 }}>
                        ORDER PLACED
                    </CustomText>

                    <View style={styles.deliveryContainer}>
                        <CustomText fontSize={18} fontFamily={fontFamily.semiBold} style={styles.deliveryText}>
                            Delivering to Home
                        </CustomText>
                    </View>

                    <CustomText fontSize={12} style={styles.fullAddressText}>
                        {locationName}
                    </CustomText>
                </View>
            </CustomSafeAreaView>
        </View>
    )
}

export default OrderSuccessScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    orderSuccessContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottieView: {
        height: 150,
        width: sizes.width * 0.6
    },
    deliveryContainer: {
        borderBottomWidth: 2,
        borderColor: colors.secondary,
        paddingBottom: 4,
        marginBottom: 5
    },
    deliveryText: {
        marginTop: 15,
        borderColor: colors.secondary
    },
    fullAddressText: {
        opacity: 0.8,
        width: '80%',
        textAlign: 'center',
        marginTop: 4
    }
})