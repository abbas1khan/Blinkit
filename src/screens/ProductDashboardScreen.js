import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { colors } from '../utils/Theme'
import { useAuthStore } from '../state/authStore'
import { changeNavigationColor } from '../utils/Helper'
import NoticeAnimation from '../components/dashboard/NoticeAnimation'
import CustomSafeAreaView from '../components/common/CustomSafeAreaView'
import Visuals from '../components/dashboard/Visuals'
import { CollapsibleContainer, CollapsibleHeaderContainer, withCollapsibleContext } from '@r0b0t3d/react-native-collapsible'
import AnimatedHeader from '../components/dashboard/AnimatedHeader'

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
            <View style={{ flex: 1 }}>
                <Visuals />
                <CustomSafeAreaView>
                    <CollapsibleContainer style={styles.panelContainer}>
                        <CollapsibleHeaderContainer containerStyle={styles.transparent}>
                            <AnimatedHeader showNotice={showNotice} />
                        </CollapsibleHeaderContainer>
                    </CollapsibleContainer>
                </CustomSafeAreaView>
            </View>
        </NoticeAnimation>
    )
}

export default withCollapsibleContext(ProductDashboardScreen)

const styles = StyleSheet.create({
    panelContainer: {
        flex: 1
    },
    transparent: {
        backgroundColor: colors.transparent,
    }
})