import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily, sizes } from '../../utils/Theme'
import CustomText from '../common/CustomText'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import DottedUnderLine from '../common/DottedUnderLine'
import { Defs, G, Path, Svg, Use } from 'react-native-svg'
import { wavyData } from '../../constants/dummyData'

const BillDetails = ({ totalItemPrice }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CustomText fontSize={17} fontFamily={fontFamily.semiBold}>
                    Bill details
                </CustomText>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.flexRowContainer}>
                    <View style={[styles.flexRow, { gap: 6 }]}>
                        <View style={styles.flexRow}>
                            <MaterialIcons name="article" size={RFValue(14)} color={colors.text} style={{ bottom: -0.5 }} />
                            <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                Items total
                            </CustomText>
                        </View>
                        <View style={styles.savedContainer}>
                            <CustomText fontSize={9} fontFamily={fontFamily.medium} color={colors.darkBlue3} style={{ top: -0.5 }}>
                                Saved ₹1
                            </CustomText>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <CustomText fontSize={12} fontFamily={fontFamily.medium} style={{ opacity: 0.7, textDecorationLine: 'line-through' }}>
                            ₹{totalItemPrice + 1}
                        </CustomText>
                        <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                            {" "}₹{totalItemPrice}
                        </CustomText>
                    </View>
                </View>

                <View style={styles.flexRowContainer}>
                    <View style={styles.flexRow}>
                        <MaterialIcons name="pedal-bike" size={RFValue(14)} color={colors.text} style={{ left: -1, bottom: -0.5, marginRight: -1 }} />
                        <View>
                            <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                Delivery charge
                            </CustomText>
                            <DottedUnderLine />
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <CustomText fontSize={12} fontFamily={fontFamily.medium} style={{ opacity: 0.7, textDecorationLine: 'line-through' }}>
                            ₹25
                        </CustomText>
                        <CustomText fontSize={12} fontFamily={fontFamily.medium} color={colors.darkBlue3}>
                            {" "}FREE
                        </CustomText>
                    </View>
                </View>

                <View style={[styles.flexRowContainer, { paddingBottom: 14 }]}>
                    <View style={styles.flexRow}>
                        <FontAwesome5 name="shopping-bag" size={RFValue(13)} color={colors.text} style={{ bottom: -0.5, marginRight: 2 }} />
                        <View>
                            <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                Handling charge
                            </CustomText>
                            <DottedUnderLine />
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                            ₹2
                        </CustomText>
                    </View>
                </View>

            </View>

            <View style={styles.totalContainer}>
                <CustomText fontSize={15} fontFamily={fontFamily.semiBold}>
                    Grand total
                </CustomText>
                <CustomText fontSize={15} fontFamily={fontFamily.semiBold}>
                    ₹{totalItemPrice + 2}
                </CustomText>
            </View>

            <Svg
                width={sizes.width}
                height={35}
                fill={colors.lightBlue2}
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

            <View style={styles.blueContainer}>
                <View>
                    <CustomText fontSize={13} fontFamily={fontFamily.semiBold} color={colors.darkBlue3}>
                        Your total savings
                    </CustomText>
                    <CustomText fontSize={11} fontFamily={fontFamily.medium} color={colors.darkBlue3}>
                        Includes ₹25 savings through free delivery
                    </CustomText>
                </View>
                <CustomText fontSize={13} fontFamily={fontFamily.semiBold} color={colors.darkBlue3}>
                    ₹27
                </CustomText>
            </View>

        </View>
    )
}

export default BillDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: 'hidden'
    },
    titleContainer: {
        padding: 12,
    },
    flexRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    contentContainer: {
        paddingHorizontal: 12
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalContainer: {
        borderTopWidth: 1,
        borderColor: colors.backgroundSecondary,
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wave: {
        width: '100%',
        marginTop: -25,
        left: -7,
    },
    blueContainer: {
        paddingHorizontal: 12,
        paddingTop: 6,
        paddingBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.lightBlue2
    },
    savedContainer: {
        backgroundColor: colors.background9,
        height: 16,
        paddingHorizontal: 4,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})