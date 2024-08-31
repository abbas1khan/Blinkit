import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { darkWeatherColors, sizes } from '../../utils/Theme';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native'

const Visuals = () => {
    return (
        <Reanimated.View style={[styles.container]}>
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
    },
    container: {
        position: "absolute",
        top: -24
    },
    lottie: {
        width: '100%',
        height: 200,
    },
    gradient: {
        width: '100%',
        height: sizes.height * 0.5,
        position: "absolute",
    },
    cloudImg: {
        width: sizes.width,
        resizeMode: 'stretch',
        height: 200,
    }
})