import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect } from 'react';
import { colors, NoticeHeight } from '../../utils/Theme';
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import Notice from './Notice';

const NoticeAnimation = ({ NoticeAnimationRef, children }) => {

    const NOTICE_HEIGHT = NoticeHeight + 12; // Define the notice height for sliding

    // Initialize SharedValue for notice to be hidden initially
    const noticePosition = useSharedValue(-NOTICE_HEIGHT); // Initially hidden above the view

    // Initialize SharedValue for children to be at the top initially
    const childrenPosition = useSharedValue(0); // Initially at the top

    // Animated styles for the notice
    const noticeAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: noticePosition.value
            }]
        };
    });

    // Animated styles for the children
    const childrenAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: childrenPosition.value
            }]
        };
    });

    // Function to start the animation
    const showNotice = () => {
        // Slide down the notice and children together
        noticePosition.value = withTiming(0, { duration: 500 });
        childrenPosition.value = withTiming(NOTICE_HEIGHT, { duration: 500 }, () => {
            // After 4.5 seconds, slide both up again
            noticePosition.value = withDelay(4500, withTiming(-NOTICE_HEIGHT, { duration: 500 }));
            childrenPosition.value = withDelay(4500, withTiming(0, { duration: 500 }));
        });
    };

    useEffect(() => {
        if (NoticeAnimationRef) {
            NoticeAnimationRef.current = { showNotice }
        }
    }, [])

    return (
        <View style={styles.container}>
            <Reanimated.View style={[styles.noticeContainer, noticeAnimatedStyle]}>
                <Notice />
            </Reanimated.View>
            <Reanimated.View style={[styles.contentContainer, childrenAnimatedStyle]}>
                {children}
            </Reanimated.View>
        </View>
    );
};

export default NoticeAnimation;

const styles = StyleSheet.create({
    noticeContainer: {
        width: '100%',
        zIndex: 999,
        position: "absolute",
    },
    contentContainer: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
