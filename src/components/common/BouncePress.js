import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Reanimated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

// Create an animated version of TouchableOpacity
const AnimatedTouchableOpacity = Reanimated.createAnimatedComponent(TouchableOpacity);

// Custom spring config to make the animation faster
const springConfig = {
    stiffness: 300, // Higher stiffness makes the animation more responsive
    damping: 20,    // Lower damping makes the spring settle faster
    mass: 0.5,      // Lower mass can make the animation faster
    overshootClamping: true, // Prevent overshooting
};

const BouncePress = ({
    children,
    onPress = () => { },
    onLayout = () => { },
    style = {},
    ...props
}) => {

    const scaleValue = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scaleValue.value }],
    }));


    const onPressIn = () => {
        scaleValue.value = withSpring(0.92, springConfig);
    };

    const onPressOut = () => {
        scaleValue.value = withSpring(1, springConfig);
    };

    return (
        <AnimatedTouchableOpacity
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            activeOpacity={1}
            onLayout={onLayout}
            style={[animatedStyle, style]}
            {...props}
        >
            {children}
        </AnimatedTouchableOpacity>
    );
};

export default BouncePress;

const styles = StyleSheet.create({});