import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fontFamily, isAndroid } from '../../utils/Theme'
import CustomText from '../common/CustomText'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = ({ showNotice = () => { } }) => {


    const [locationName, setLocationName] = useState("Loading...")


    async function getLocationName() {
        Geolocation.getCurrentPosition(async (info) => {
            const latitude = info?.coords?.latitude
            const longitude = info?.coords?.longitude
            if (latitude && longitude)
                await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=16&addressdetails=1`, { headers: { "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8" } })
                    .then(async (resp) => {
                        if (resp?.data?.display_name) {
                            let display_name = resp?.data?.display_name
                            display_name = display_name?.split(", ")
                            if (display_name?.length > 1) {
                                display_name = `${display_name[0]}, ${display_name[1]}`
                            } else if (display_name?.length == 1) {
                                display_name = display_name[0]
                            }
                            if (display_name) {
                                setLocationName(display_name)
                            }
                        }
                    })
                    .catch(async (err) => {
                        console.error("🚀 ~ file: Header.js:23 ~ Geolocation.getCurrentPosition ~ err:", err)
                    })
        })
    }


    useEffect(() => {
        getLocationName()
    }, [])


    return (
        <View style={styles.subContainer}>
            <TouchableOpacity
                onPress={() => { showNotice() }}
                activeOpacity={0.8}
                style={styles.flexView}
            >
                <CustomText fontSize={12} fontFamily={fontFamily.bold} color={colors.white}>
                    Delivery in
                </CustomText>

                <View style={styles.flexRowGap}>
                    <CustomText fontSize={26} fontFamily={fontFamily.semiBold} color={colors.white} >
                        10 minutes
                    </CustomText>

                    <TouchableOpacity
                        onPress={() => { showNotice() }}
                        style={styles.noticeBtn}
                    >
                        <CustomText fontSize={11} fontFamily={fontFamily.medium} color={colors.darkBlue2} >
                            🌧️ Rain
                        </CustomText>
                    </TouchableOpacity>
                </View>

                <View style={styles.locationView}>
                    <CustomText fontSize={15} color={colors.white} numberOfLines={1}>
                        {locationName}
                    </CustomText>
                    <AntDesign name="caretdown" size={10} color={colors.white} />
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    locationView: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        width: '72%',
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingTop: isAndroid ? 2 : 5,
        paddingBottom: 14,
        justifyContent: 'space-between',
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: -4
    },
    noticeBtn: {
        backgroundColor: colors.background3,
        borderRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 2,
        bottom: -2
    },
    flexView: {
        flex: 1
    }
})