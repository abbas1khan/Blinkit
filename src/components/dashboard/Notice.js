import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily, NoticeHeight } from '../../utils/Theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../common/CustomText'
import Svg, { Defs, G, Path, Use } from "react-native-svg";
import { wavyData } from '../../constants/dummyData'

const Notice = () => {
    return (
        <View style={{ width: '100%', height: 105, overflow: 'hidden' }}>
            <View style={styles.container}>
                <View style={styles.noticeContainer}>
                    <SafeAreaView style={{ padding: 10 }}>
                        <CustomText fontFamily={fontFamily.semiBold} style={styles.title}>
                            It's raining near this location
                        </CustomText>
                        <CustomText fontSize={12} style={styles.subTitle}>
                            Our delivery partners may take longer to reach you
                        </CustomText>
                    </SafeAreaView>
                </View>
            </View>

            <Svg
                width={"100%"}
                height={35}
                fill={colors.noticeBackground}
                viewBox='0 0 4000 1000'
                preserveAspectRatio='none'
                style={styles.wave}
            >
                <Defs>
                    <Path id="wavePath" d={wavyData} />
                </Defs>
                <G>
                    <Use href='#wavePath' y={321} />
                </G>
            </Svg>

        </View>
    )
}

export default Notice

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.noticeBackground
    },
    noticeContainer: {
        backgroundColor: colors.noticeBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.darkBlue,
        marginBottom: 8,
        textAlign: 'center',
    },
    subTitle: {
        textAlign: 'center',
    },
    wave: {
        width: '100%',
        transform: [{ rotate: '180deg' }]
    }
})