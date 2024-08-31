import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fontFamily as ThemeFontFamily } from '../../utils/Theme'
import { RFValue } from 'react-native-responsive-fontsize'

const CustomText = ({
    fontSize = 14,
    fontFamily = ThemeFontFamily.regular,
    color = colors.text,
    numberOfLines,
    style = {},
    children,
    onLayout = () => { },
    onTextLayout = () => { },
    ...props
}) => {
    return (
        <Text
            onLayout={onLayout}
            onTextLayout={onTextLayout}
            style={[{ fontSize: RFValue(fontSize), fontFamily, color }, style]}
            numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
            {...props}
        >
            {children}
        </Text>
    )
}

export default CustomText

const styles = StyleSheet.create({})