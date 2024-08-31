import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { imageData } from '../../constants/dummyData'
import AutoScroll from '@homielab/react-native-auto-scroll'
import { colors, sizes } from '../../utils/Theme'

const ProductSlider = () => {

    const rows = useMemo(() => {
        const results = []
        for (let i = 0; i < imageData.length; i += 4) {
            results.push(imageData.slice(i, i + 4))
        }
        return results
    }, [])

    return (
        <View pointerEvents='none' style={{ marginTop: 6 }}>
            <AutoScroll
                endPaddingWidth={0}
                duration={10000}
                style={styles.autoScroll}
            >
                <View style={styles.gridContainerView}>
                    {rows?.map((row, rowIndex) => {
                        return (
                            <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />
                        )
                    })}
                </View>
            </AutoScroll>
        </View>
    )
}

const Row = ({ row, rowIndex }) => {
    return (
        <View style={styles.rowView}>
            {row?.map((image, imageIndex) => {
                const horizontalShift = rowIndex % 2 == 0 ? -18 : 18
                return (
                    <View key={imageIndex} style={[styles.itemContainer, { transform: [{ translateX: horizontalShift }] }]}>
                        <Image
                            source={image}
                            style={styles.image}
                        />
                    </View>
                )
            })}
        </View>
    )
}

const MemoizedRow = React.memo(Row)

export default ProductSlider

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        marginBottom: 7,
    },
    image: {
        width: '94%',
        height: '94%',
        resizeMode: 'contain',
    },
    itemContainer: {
        marginBottom: 7,
        marginHorizontal: 7,
        width: sizes.width * 0.26,
        height: sizes.width * 0.27,
        borderRadius: 25,
        backgroundColor: colors.background1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridContainerView: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
    },
    autoScroll: {
        position: "absolute",
        zIndex: -2,
    },
}) 