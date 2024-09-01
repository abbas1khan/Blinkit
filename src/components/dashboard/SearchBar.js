import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SearchSVG from '../../assets/SVG_Components/SearchSVG'
import { colors, fontFamily, hexToRgbA, sizes } from '../../utils/Theme'
import RollingBar from 'react-native-rolling-bar'
import CustomText from '../common/CustomText'
import MicrophoneSVG from '../../assets/SVG_Components/MicrophoneSVG'

const textColor = hexToRgbA(colors.text, 0.7)

const SearchBar = () => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => { }}
            style={styles.container}
        >
            <View style={styles.searchIconView}>
                <SearchSVG size={18} color={colors.text} />
            </View>

            <RollingBar interval={3000} defaultStyle={false} customStyle={styles.textContainer}>
                <CustomText fontSize={15} fontFamily={fontFamily.medium} color={textColor} numberOfLines={1}>Search "sweets"</CustomText>
                <CustomText fontSize={15} fontFamily={fontFamily.medium} color={textColor} numberOfLines={1}>Search "milk"</CustomText>
                <CustomText fontSize={15} fontFamily={fontFamily.medium} color={textColor} numberOfLines={1}>Search for ata, dal, coke</CustomText>
                <CustomText fontSize={15} fontFamily={fontFamily.medium} color={textColor} numberOfLines={1}>Search "chips"</CustomText>
                <CustomText fontSize={15} fontFamily={fontFamily.medium} color={textColor} numberOfLines={1}>Search "pooja thali"</CustomText>
            </RollingBar>

            <View style={styles.divider} />

            <View style={styles.micView}>
                <MicrophoneSVG size={16} />
            </View>
        </TouchableOpacity>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        width: sizes.width - 24,
        alignSelf: 'center',
        backgroundColor: colors.background4,
        borderRadius: 12,
        paddingLeft: 12,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: "hidden"
    },
    textContainer: {
        top: -1.5,
        paddingLeft: 10,
        height: '100%',
        flex: 1,
    },
    searchIconView: {
        marginTop: -2
    },
    divider: {
        width: 1,
        height: 32,
        backgroundColor: hexToRgbA(colors.border, 0.6),
    },
    micView: {
        width: 41,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})