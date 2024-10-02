import { Alert, Image, Keyboard, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fontFamily, hexToRgbA, lightColors } from '../utils/Theme'
import { changeNavigationColor } from '../utils/Helper'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import ProductSlider from '../components/login/ProductSlider'
import CustomText from '../components/common/CustomText'
import Spacer from '../components/common/Spacer'
import { horizontalScale } from '../utils/Scaling'
import CustomButton from '../components/common/CustomButton'
import { KeyboardStickyView } from "react-native-keyboard-controller"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import { resetAndNavigate } from '../utils/NavigationUtil'
import { customerLogin } from '../services/authService'

const fadeColors = [...lightColors].reverse()

const offset = { closed: 0, opened: -2 };

const CustomerLoginScreen = () => {


    const [phoneNumber, setPhoneNumber] = useState("")
    const [loading, setLoading] = useState(false)



    const handleAuth = async () => {
        Keyboard.dismiss()
        setLoading(true)
        try {
            await customerLogin(phoneNumber)
            resetAndNavigate("ProductDashboardScreen")
        } catch (error) {
            Alert.alert("Login failed")
        } finally {
            setLoading(false)
        }
    }

    const skipLogin = () => {
        Keyboard.dismiss()
        try {
            resetAndNavigate("ProductDashboardScreen")
        } catch (error) { }
    }


    useEffect(() => {
        setTimeout(() => {
            changeNavigationColor(colors.white)
        }, 10);
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide', () => {
                Keyboard.dismiss()
            }
        )
        return () => {
            keyboardDidHideListener.remove();
        };
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>
            <CustomSafeAreaView>
                <View style={{ flex: 1 }}>

                    <ProductSlider />

                    <Pressable
                        onPress={() => { skipLogin() }}
                        style={styles.skipBtnView}
                    >
                        <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                            Skip login
                        </CustomText>
                    </Pressable>

                    <KeyboardStickyView offset={offset}>
                        <View style={{ height: "100%", justifyContent: 'flex-end' }}>

                            <LinearGradient colors={fadeColors} style={styles.gradientFade} />

                            <View style={{ alignItems: 'center', backgroundColor: colors.white, paddingVertical: 10, }}>
                                <Image
                                    source={require("../assets/images/logo.png")}
                                    style={styles.logoImg}
                                />

                                <Spacer gap={14} />

                                <CustomText fontSize={24} fontFamily={fontFamily.bold}>
                                    India's last minute app
                                </CustomText>

                                <Spacer gap={6} />

                                <CustomText fontSize={15} fontFamily={fontFamily.semiBold}>
                                    Log in or sign up
                                </CustomText>

                                <Spacer gap={24} />

                                <View style={{ width: '100%', paddingHorizontal: 16 }}>
                                    <View style={styles.phoneContainer}>
                                        <CustomText fontFamily={fontFamily.semiBold} style={styles.countryText}>
                                            +91
                                        </CustomText>

                                        <TextInput
                                            value={phoneNumber}
                                            placeholder='Enter mobile number'
                                            placeholderTextColor={colors.placeHolder}
                                            keyboardType='numeric'
                                            maxLength={10}
                                            cursorColor={colors.text}
                                            style={styles.input}
                                            onChangeText={(text) => setPhoneNumber(text?.trim()?.replace(/[^0-9]/g, ''))}
                                        />

                                        {phoneNumber?.trim()?.length > 0 ?
                                            <Pressable
                                                style={styles.closeBtn}
                                                onPress={() => setPhoneNumber("")}
                                            >
                                                <Ionicons name="close-circle-sharp" size={18} color="black" />
                                            </Pressable>
                                            : null
                                        }
                                    </View>

                                    <Spacer gap={12} />

                                    <CustomButton
                                        title='Continue'
                                        loading={loading}
                                        disabled={phoneNumber?.trim()?.length !== 10}
                                        onPress={() => handleAuth()}
                                    />
                                </View>

                                <Spacer gap={24} />

                                <View style={styles.footerView}>
                                    <CustomText fontSize={9} color={hexToRgbA(colors.text, 0.7)}>
                                        By continuing, you agree to out Terms of service & Privacy policy
                                    </CustomText>
                                </View>

                            </View>
                        </View>
                    </KeyboardStickyView>

                </View>
            </CustomSafeAreaView>
        </View>
    )
}

export default CustomerLoginScreen

const styles = StyleSheet.create({
    logoImg: {
        width: horizontalScale(64),
        height: horizontalScale(64),
        borderRadius: 20,
    },
    phoneContainer: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        height: 51,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontFamily: fontFamily.semiBold,
        color: colors.text,
        marginLeft: 10,
        flex: 1,
        height: '100%',
        bottom: -1
    },
    footerView: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: colors.background2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientFade: {
        paddingTop: 60,
        width: '100%'
    },
    closeBtn: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -16,
    },
    skipBtnView: {
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: colors.white,
        position: "absolute",
        top: 24,
        right: 14,
        elevation: 4,
        zIndex: 100
    },
    countryText: {
        letterSpacing: 1
    },
})