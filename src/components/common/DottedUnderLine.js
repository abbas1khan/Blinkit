import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState, useMemo, memo } from 'react';
import { colors } from '../../utils/Theme';

const DottedUnderLine = ({ color = colors.text }) => {

    const [dotCount, setDotCount] = useState(0);

    // Dynamically calculate the number of dots based on the available width
    const onLayout = useCallback((event) => {
        const width = event.nativeEvent.layout.width + 1
        const dots = Math.floor(width / 4)
        setDotCount(dots);
    }, []);

    return (
        <View onLayout={onLayout} style={styles.container}>
            {Array.from({ length: dotCount }).map((_, index) => (
                <View
                    key={`dot-underline-${index}`} // Provide a unique key for each dot
                    style={[styles.dot, { backgroundColor: color }]}
                />
            ))}
        </View>
    );
};

export default memo(DottedUnderLine);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 2,
        right: -1,
    },
    dot: {
        width: 2,
        height: 1,
        marginRight: 2,
    }
});
