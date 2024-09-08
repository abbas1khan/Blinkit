import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { colors } from '../../utils/Theme'
import { horizontalScale } from '../../utils/Scaling'
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import CustomText from '../common/CustomText';

const SideBar = ({
    categories,
    selectedCategory,
    onCategoryPress = () => { }
}) => {

    const scrollViewRef = useRef(null)


    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{ paddingBottom: 50 }}
                showsVerticalScrollIndicator={false}
            >
                <Reanimated.View>
                    {categories?.map((category, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={1}
                                onPress={() => { onCategoryPress(category) }}
                                style={styles.categoryBtn}
                            >
                                <View style={styles.imageContainer}>
                                    <Reanimated.Image
                                        source={category?.image}
                                        style={[styles.image]}
                                    />
                                </View>

                                <CustomText fontSize={11} style={{ textAlign: "center" }}>
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
        width: horizontalScale(80),
        borderRightWidth: 0.8,
        borderRightColor: colors.border2,
    },
    categoryBtn: {
        padding: 10,
        width: '100%',
        height: 100,
        paddingVertical: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
    imageContainer: {
        borderRadius: 100,
        width: '75%',
        height: '50%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})