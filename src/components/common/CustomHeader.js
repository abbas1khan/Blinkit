import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../utils/Theme'
import CustomText from './CustomText'
import { AntDesign } from '@expo/vector-icons'
import { goBack } from '../../utils/NavigationUtil'
import SearchSVG from '../../assets/SVG_Components/SearchSVG'

const CustomHeader = ({
    title = "",
    showSearch = false
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => { goBack() }}
                style={styles.backBtn}
            >
                <AntDesign name="arrowleft" size={24} color={colors.text} />
            </TouchableOpacity>

            <View style={styles.flexView}>
                <CustomText fontSize={16} fontFamily={fontFamily.semiBold} numberOfLines={1}>
                    {title}
                </CustomText>
            </View>

            {showSearch ?
                <View style={styles.backBtn}>
                    <SearchSVG size={18} color={colors.text} />
                </View>
                : null
            }
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: '100%',
        borderBottomWidth: 0.6,
        borderColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6
    },
    backBtn: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexView: {
        flex: 1,
    },
})