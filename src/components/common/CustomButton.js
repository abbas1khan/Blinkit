import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../utils/Theme'
import CustomText from './CustomText'

const CustomButton = ({
    title = "",
    onPress = () => { },
    disabled = false,
    loading = false,
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.btn, { backgroundColor: disabled ? colors.disabled : colors.secondary }]}
        >
            {loading ?
                <ActivityIndicator color={colors.white} size='small' />
                :
                <CustomText fontSize={15} fontFamily={fontFamily.semiBold} color={colors.white}>
                    {title}
                </CustomText>
            }
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    }
})