import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import CustomHeader from '../components/common/CustomHeader'
import { colors, fontFamily } from '../utils/Theme'
import CustomText from '../components/common/CustomText'
import { storage, tokenStorage } from '../state/storage'
import { Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import CreditCardSVG from '../assets/SVG_Components/CreditCardSVG'
import SupportSVG from '../assets/SVG_Components/SupportSVG'
import { useCartStore } from '../state/CartStore'
import { resetAndNavigate } from '../utils/NavigationUtil'

const ProfileScreen = () => {

    const [phoneNumber, setPhoneNumber] = useState("")


    const { clearCart } = useCartStore()


    const getPhoneNumber = () => {
        const phone = tokenStorage.getString("phoneNumber")
        if (phone) {
            setPhoneNumber(phone)
        }
    }

    const onLogoutPress = () => {
        clearCart()
        tokenStorage.clearAll()
        storage.clearAll()
        resetAndNavigate("CustomerLoginScreen")
    }



    useEffect(() => {
        getPhoneNumber()
    }, [])

    return (
        <View style={styles.mainContainer}>
            <CustomSafeAreaView>
                <CustomHeader title={"Profile"} />
                <View style={styles.container}>

                    <View style={styles.topTextContainer}>
                        <CustomText fontSize={24} fontFamily={fontFamily.semiBold}>
                            My account
                        </CustomText>
                        <CustomText fontSize={15}>
                            {phoneNumber}
                        </CustomText>
                    </View>

                    <ScrollView
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainerStyle}
                    >
                        <View style={styles.horizontalButtonsContainer}>
                            <View style={styles.horizontalButtonView}>
                                <Ionicons name="wallet-outline" size={21} color="black" />
                                <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                    Wallet
                                </CustomText>
                            </View>
                            <View style={styles.horizontalButtonView}>
                                <SupportSVG size={19} />
                                <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                    Support
                                </CustomText>
                            </View>
                            <View style={styles.horizontalButtonView}>
                                <CreditCardSVG />
                                <CustomText fontSize={12} fontFamily={fontFamily.medium} style={{ top: -2 }}>
                                    Payments
                                </CustomText>
                            </View>
                        </View>

                        <CustomText fontSize={13} fontFamily={fontFamily.medium} color={colors.text2} style={{ letterSpacing: 0.3, marginTop: 24, marginBottom: 8 }}>
                            YOUR INFORMATION
                        </CustomText>

                        <View>
                            <ActionButton title='Your orders' />
                            <ActionButton title='Address book' />
                            <ActionButton title='Collected coupons' />
                        </View>

                        <CustomText fontSize={13} fontFamily={fontFamily.medium} color={colors.text2} style={{ letterSpacing: 0.3, marginTop: 24, marginBottom: 8 }}>
                            OTHER INFORMATION
                        </CustomText>

                        <View>
                            <ActionButton title='Share the app' />
                            <ActionButton title='About us' />
                            <ActionButton title='Log out' onPress={() => onLogoutPress()} />
                        </View>

                        <View style={styles.logoContainer}>
                            <CustomText fontSize={22} fontFamily={fontFamily.bold} color={colors.rgbaBlack(0.3)} style={{ letterSpacing: -1.2, marginBottom: -3 }}>
                                blinkit
                            </CustomText>
                            <CustomText fontSize={12} fontFamily={fontFamily.medium} color={colors.rgbaBlack(0.3)}>
                                v1.0.0
                            </CustomText>
                        </View>

                    </ScrollView>
                </View>
            </CustomSafeAreaView>
        </View>
    )
}

export default ProfileScreen

const ActionButton = ({ title = "", icon, onPress = () => { } }) => {
    return (
        <Pressable
            onPress={() => { onPress() }}
            style={styles.buttonContainer}
        >
            <View style={styles.iconContainer}>
                {icon ? icon : null}
            </View>

            <View style={styles.buttonTextContainer}>
                <CustomText fontSize={15} fontFamily={fontFamily.medium} color={colors.text3}>
                    {title}
                </CustomText>
            </View>

            <View>
                <Entypo name="chevron-small-right" size={25} color={colors.lightGrey1} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingHorizontal: 12
    },
    topTextContainer: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        gap: 12,
    },
    horizontalButtonsContainer: {
        marginTop: 5,
        height: 76,
        backgroundColor: colors.background10,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    horizontalButtonView: {
        alignItems: 'center',
        gap: 6
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 80
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: colors.background4
    },
    buttonTextContainer: {
        flex: 1,
        marginHorizontal: 12,
    }
})