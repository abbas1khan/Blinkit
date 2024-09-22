import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { colors, fontFamily } from '../../utils/Theme'
import { horizontalScale } from '../../utils/Scaling'
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import CustomText from '../common/CustomText';

const SideBar = ({
    categories,
    selectedCategory,
    onCategoryPress = () => { }
}) => {


    const scrollViewRef = useRef(null)
    const indicatorPosition = useSharedValue(0)
    const animatedValues = categories?.map(() => useSharedValue(0))



    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: indicatorPosition.value }]
    }))




    useEffect(() => {
        let targetIndex = -1

        categories?.forEach((category, index) => {
            const isSelected = selectedCategory?._id === category?._id
            animatedValues[index].value = withTiming(isSelected ? 0 : -10, { duration: 300 })
            if (isSelected) { targetIndex = index }
        })

        if (targetIndex !== -1) {
            indicatorPosition.value = withTiming(targetIndex * 100, { duration: 300 })
            if (targetIndex > 4) {
                scrollViewRef?.current?.scrollTo({
                    y: targetIndex * 100,
                    animated: true
                })
            }
        }
    }, [selectedCategory])


    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{ paddingBottom: 50 }}
                showsVerticalScrollIndicator={false}
            >

                <Reanimated.View style={[styles.indicator, indicatorStyle]} />

                <Reanimated.View>
                    {categories?.map((category, index) => {

                        const isSelected = selectedCategory?._id === category?._id
                        const animatedStyle = useAnimatedStyle(() => ({
                            bottom: animatedValues[index].value
                        }))

                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={1}
                                onPress={() => { onCategoryPress(category) }}
                                style={styles.categoryBtn}
                            >
                                <View style={[styles.imageContainer, isSelected && styles.seletedImageCategory]}>
                                    <Reanimated.Image
                                        source={category?.image}
                                        style={[styles.image, animatedStyle]}
                                    />
                                </View>

                                <CustomText fontSize={11} fontFamily={isSelected ? fontFamily.semiBold : fontFamily.regular} style={{ textAlign: "center" }}>
                                    {category?.name}
                                </CustomText>
                            </TouchableOpacity>
                        )
                    })}
                </Reanimated.View>
            </ScrollView>
        </View>
    )
}

export default SideBar

const styles = StyleSheet.create({
    container: {
        width: horizontalScale(76),
        borderRightWidth: 0.8,
        borderRightColor: colors.border2,
    },
    categoryBtn: {
        width: '100%',
        height: 100,
        paddingVertical: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6
    },
    image: {
        width: horizontalScale(38),
        height: 70,
        resizeMode: 'contain'
    },
    imageContainer: {
        borderRadius: 100,
        width: horizontalScale(52),
        height: horizontalScale(52),
        marginBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background4,
        overflow: 'hidden',
    },
    seletedImageCategory: {
        backgroundColor: colors.background8
    },
    indicator: {
        position: "absolute",
        right: 0,
        width: 4,
        height: 100,
        top: 0,
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    }
})