import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { colors, fontFamily } from '../utils/Theme'
import { useAuthStore } from '../state/authStore'
import { changeNavigationColor } from '../utils/Helper'
import NoticeAnimation from '../components/dashboard/NoticeAnimation'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import Visuals from '../components/dashboard/Visuals'
import { CollapsibleContainer, CollapsibleHeaderContainer, CollapsibleScrollView, withCollapsibleContext } from '@r0b0t3d/react-native-collapsible'
import AnimatedHeader from '../components/dashboard/AnimatedHeader'
import StickySearchBar from '../components/dashboard/StickySearchBar'
import Content from '../components/dashboard/Content'
import CustomText from '../components/common/CustomText'
import { RFValue } from 'react-native-responsive-fontsize'

const ProductDashboardScreen = () => {

    const NoticeAnimationRef = useRef()


    const { user } = useAuthStore()


    function showNotice() {
        if (NoticeAnimationRef?.current?.showNotice) {
            NoticeAnimationRef?.current?.showNotice()
        }
    }


    useEffect(() => {
        setTimeout(() => {
            changeNavigationColor(colors.white)
        }, 10);

        setTimeout(() => {
            showNotice()
        }, 1000);
    }, [])

    return (
        <NoticeAnimation NoticeAnimationRef={NoticeAnimationRef}>
            <View style={styles.panelContainer}>
                <Visuals />
                <CustomSafeAreaView>
                    <CollapsibleContainer style={styles.panelContainer}>

                        <CollapsibleHeaderContainer containerStyle={styles.transparent}>
                            <AnimatedHeader showNotice={showNotice} />
                            <StickySearchBar />
                        </CollapsibleHeaderContainer>

                        <CollapsibleScrollView
                            nestedScrollEnabled
                            style={styles.panelContainer}
                            contentContainerStyle={styles.flexGrowView}
                            showsVerticalScrollIndicator={false}
                        >
                            <Content />

                            <View style={styles.footerView}>
                                <View style={styles.footerTitleView}>
                                    <CustomText fontSize={44} fontFamily={fontFamily.bold} style={styles.footerTitleText}>
                                        India's last minute app
                                    </CustomText>
                                    <Image
                                        source={require("../assets/images/mango.png")}
                                        style={styles.mangoImg}
                                    />
                                </View>
                                <CustomText fontSize={16} fontFamily={fontFamily.bold} style={styles.footerSubTitleText}>
                                    Developed by ❤️ Abbas Khan
                                </CustomText>
                            </View>
                        </CollapsibleScrollView>
                    </CollapsibleContainer>
                </CustomSafeAreaView>
            </View>
        </NoticeAnimation>
    )
}

export default withCollapsibleContext(ProductDashboardScreen)

const styles = StyleSheet.create({
    flexGrowView: {
        flexGrow: 1,
    },
    panelContainer: {
        flex: 1
    },
    transparent: {
        backgroundColor: colors.transparent,
    },
    footerView: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
    },
    footerTitleText: {
        opacity: 0.25,
        lineHeight: RFValue(48),
    },
    footerSubTitleText: {
        opacity: 0.25,
        marginTop: 50,
        paddingBottom: 100
    },
    footerTitleView: {

    },
    mangoImg: {
        width: 50,
        height: 50,
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
        right: 0,
        bottom: 6,
    }
})