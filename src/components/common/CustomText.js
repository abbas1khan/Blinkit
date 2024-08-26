import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily as ThemeFontFamily } from '../../utils/Theme'
import { RFValue } from 'react-native-responsive-fontsize'

const CustomText = ({
    fontSize = 14,
    fontFamily = ThemeFontFamily.regular,
    color = colors.black,
    numberOfLines,
    style = {},
    onLayout = () => { },
    children
}) => {
    return (
        <Text
            onLayout={onLayout}
            numberOfLines={numberOfLines}
            style={[{ fontSize: RFValue(fontSize), fontFamily, color }, style]}
        >
            {children}
        </Text>
    )
}

export default CustomText

const styles = StyleSheet.create({})