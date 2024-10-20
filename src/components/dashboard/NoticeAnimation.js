import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../utils/Theme';
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import Notice from './Notice';

const NoticeAnimation = ({ NoticeAnimationRef, children }) => {

    const [NoticeHeight, setNoticeHeight] = useState(107)

    const noticePosition = useSharedValue(-NoticeHeight)
    const childrenPosition = useSharedValue(0)

    const noticeAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{
            translateY: noticePosition.value
        }]
    }));

    const childrenAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{
            translateY: childrenPosition.value
        }]
    }));

    const showNotice = () => {
        // Slide down the notice and children together
        noticePosition.value = withTiming(0, { duration: 500 });
        childrenPosition.value = withTiming(NoticeHeight, { duration: 500 }, () => {
            // After 4.5 seconds, slide both up again
            noticePosition.value = withDelay(4500, withTiming(-NoticeHeight, { duration: 500 }));
            childrenPosition.value = withDelay(4500, withTiming(0, { duration: 500 }));
        });
    };

    // useEffect(() => {
    //     noticePosition.value = -NoticeHeight
    // }, [NoticeHeight])

    useEffect(() => {
        if (NoticeAnimationRef) {
            NoticeAnimationRef.current = { showNotice }
        }
    }, [])

    return (
        <View style={styles.container}>
            <Reanimated.View style={[styles.noticeContainer, noticeAnimatedStyle]}>
                <Notice setNoticeHeight={setNoticeHeight} />
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
