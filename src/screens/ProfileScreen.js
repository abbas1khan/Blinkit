import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import CustomHeader from '../components/common/CustomHeader'
import { colors, fontFamily } from '../utils/Theme'
import CustomText from '../components/common/CustomText'
import { tokenStorage } from '../state/storage'
import { Entypo, Ionicons } from '@expo/vector-icons'
import CreditCardSVG from '../assets/SVG_Components/CreditCardSVG'
import SupportSVG from '../assets/SVG_Components/SupportSVG'
import PaperBagSVG from '../assets/SVG_Components/PaperBagSVG'
import BookSVG from '../assets/SVG_Components/BookSVG'
import CouponSVG from '../assets/SVG_Components/CouponSVG'
import ShareSVG from '../assets/SVG_Components/ShareSVG'
import AboutUsSVG from '../assets/SVG_Components/AboutUsSVG'
import LogoutSVG from '../assets/SVG_Components/LogoutSVG'
import LogoutModal from '../modals/LogoutModal'

const ProfileScreen = () => {

    const [phoneNumber, setPhoneNumber] = useState("")
    const [showLogoutModal, setShowLogoutModal] = useState(false)


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

                        <CustomText fontSize={13} fontFamily={fontFamily.medium} color={colors.text2} style={styles.subHeading}>
                            YOUR INFORMATION
                        </CustomText>

                        <View>
                            <ActionButton title='Your orders' icon={<PaperBagSVG size={17} color={colors.disabled} />} />
                            <ActionButton title='Address book' icon={<BookSVG size={14} color={colors.disabled} />} />
                            <ActionButton title='Collected coupons' icon={<CouponSVG size={16} color={colors.disabled} />} />
                        </View>

                        <CustomText fontSize={13} fontFamily={fontFamily.medium} color={colors.text2} style={styles.subHeading}>
                            OTHER INFORMATION
                        </CustomText>

                        <View>
                            <ActionButton title='Share the app' icon={<ShareSVG size={16} color={colors.disabled} />} />
                            <ActionButton title='About us' icon={<AboutUsSVG size={16} color={colors.disabled} />} />
                            <ActionButton title='Log out' onPress={() => setShowLogoutModal(true)} icon={<View style={{ transform: [{ scaleX: -1 }] }}><LogoutSVG size={14} color={colors.disabled} /></View>} />
                        </View>

                        <View style={styles.logoContainer}>
                            <CustomText fontSize={22} fontFamily={fontFamily.bold} color={colors.rgbaBlack(0.3)} style={{ letterSpacing: -1.2, marginBottom: -3 }}>
                                blinkit
                            </CustomText>
                            <CustomText fontSize={12} fontFamily={fontFamily.medium} color={colors.rgbaBlack(0.3)}>
                                v1.0.0
                            </CustomText>
                        </View>

                        <LogoutModal
                            modalVisible={showLogoutModal}
                            setModalVisible={setShowLogoutModal}
                        />

                    </ScrollView>
                </View>
            </CustomSafeAreaView>
        </View>
    )
}

export default ProfileScreen

const ActionButton = ({ title = "", icon = null, onPress = () => { } }) => {
    return (
        <Pressable
            onPress={() => { onPress() }}
            style={styles.buttonContainer}
        >
            <View style={styles.iconContainer}>
                {icon}
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
    subHeading: {
        letterSpacing: 0.3,
        marginTop: 24,
        marginBottom: 8,
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
        backgroundColor: colors.background4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextContainer: {
        flex: 1,
        marginHorizontal: 12,
        top: -1,
    }
})