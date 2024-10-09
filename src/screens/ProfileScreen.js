import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import CustomHeader from '../components/common/CustomHeader'
import { colors, fontFamily } from '../utils/Theme'
import CustomText from '../components/common/CustomText'
import { tokenStorage } from '../state/storage'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import CreditCardSVG from '../assets/SVG_Components/CreditCardSVG'
import SupportSVG from '../assets/SVG_Components/SupportSVG'

const ProfileScreen = () => {

    const [phoneNumber, setPhoneNumber] = useState("")


    const getPhoneNumber = () => {
        const phone = tokenStorage.getString("phoneNumber")
        if (phone) {
            setPhoneNumber(phone)
        }
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
                            <View style={styles.actionContainer}>
                                <Ionicons name="wallet-outline" size={21} color="black" />
                                <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                    Wallet
                                </CustomText>
                            </View>
                            <View style={styles.actionContainer}>
                                <SupportSVG size={19} />
                                <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                    Support
                                </CustomText>
                            </View>
                            <View style={styles.actionContainer}>
                                <CreditCardSVG />
                                <CustomText fontSize={12} fontFamily={fontFamily.medium} style={{ top: -2 }}>
                                    Payments
                                </CustomText>
                            </View>
                        </View>

                        <CustomText fontSize={13} fontFamily={fontFamily.medium} color={colors.text2} style={{ letterSpacing: 0.3, marginTop: 24 }}>
                            YOUR INFORMATION
                        </CustomText>

                        <View>
                            <View style={styles.buttonContainer}>

                            </View>
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
        height: 76,
        backgroundColor: colors.background10,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    actionContainer: {
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
    }
})