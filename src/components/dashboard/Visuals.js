import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import { darkWeatherColors, sizes } from '../../utils/Theme';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native'
import { useCollapsibleContext } from '@r0b0t3d/react-native-collapsible';

const Visuals = () => {

    const { scrollY } = useCollapsibleContext()
    const headerAniamtedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 120], [1, 0])
        return { opacity }
    })

    return (
        <Reanimated.View style={[styles.container, headerAniamtedStyle]}>
            <LinearGradient colors={darkWeatherColors} style={styles.gradient} />

            <Image
                source={require("../../assets/images/cloud.png")}
                style={styles.cloudImg}
            />

            <View style={styles.lottieView}>
                <LottieView
                    autoPlay={true}
                    enableMergePathsAndroidForKitKatAndAbove={true}
                    loop={true}
                    source={require("../../assets/animations/raining.json")}
                    style={styles.lottie}
                />
            </View>
        </Reanimated.View>
    )
}

export default Visuals

const styles = StyleSheet.create({
    lottieView: {
        transform: [{ scaleX: -1 }],
        position: 'absolute',
        opacity: 0.7
    },
    container: {
        position: "absolute",
        top: -10
    },
    lottie: {
        width: '100%',
        height: 160,
    },
    gradient: {
        width: '100%',
        height: sizes.height * 0.42,
        position: "absolute",
    },
    cloudImg: {
        width: sizes.width,
        resizeMode: 'stretch',
        height: 180,
    }
})