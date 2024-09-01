import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const BouncePress = ({
    onPress = () => { },
    style = {},
    children
}) => {
    const scaleValue = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scaleValue.value }],
    }));

    // Custom spring config to make the animation faster
    const springConfig = {
        stiffness: 300, // Higher stiffness makes the animation more responsive
        damping: 20,    // Lower damping makes the spring settle faster
        mass: 0.5,      // Lower mass can make the animation faster
        overshootClamping: true, // Prevent overshooting
    };

    const onPressIn = () => {
        scaleValue.value = withSpring(0.92, springConfig);
    };

    const onPressOut = () => {
        scaleValue.value = withSpring(1, springConfig);
    };

    return (
        <TouchableOpacity
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            activeOpacity={1}
            style={style}
        >
            <Animated.View style={[animatedStyle, { width: '100%' }]}>
                {children}
            </Animated.View>
        </TouchableOpacity>
    );
};

export default BouncePress;

const styles = StyleSheet.create({});
