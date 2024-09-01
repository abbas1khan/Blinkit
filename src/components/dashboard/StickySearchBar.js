import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StickyView, useCollapsibleContext } from '@r0b0t3d/react-native-collapsible'
import Reanimated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { colors } from '../../utils/Theme'
import SearchBar from './SearchBar'

const StickySearchBar = () => {

    const { scrollY } = useCollapsibleContext()
    const animatedShadow = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [0, 140], [0, 1])
        return { opacity }
    })
    const backgroundColorChanges = useAnimatedStyle(() => {
        const opacity = interpolate(scrollY.value, [1, 80], [0, 1])
        return {
            backgroundColor: `rgba(255, 255, 255, ${opacity})`
        }
    })

    return (
        <StickyView style={[{ backgroundColor: colors.transparent, }, backgroundColorChanges]}>
            <SearchBar />
            <Reanimated.View style={[styles.shadow, animatedShadow]} />
        </StickyView>
    )
}

export default StickySearchBar

const styles = StyleSheet.create({
    shadow: {
        height: 8,
        width: '100%'
    }
})