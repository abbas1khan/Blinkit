import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../../utils/Theme'
import CustomText from '../common/CustomText'
import BouncePress from '../common/BouncePress'
import UniversalAdd from '../common/UniversalAdd'

const ProductItem = ({ item, index, categoryImage = "" }) => {
    return (
        <BouncePress style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item?.image }}
                        style={styles.image}
                    />

                    <View style={styles.fallBackView}>
                        <Image
                            source={categoryImage}
                            style={styles.fallBackImage}
                        />
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.flexRow}>
                        <Image
                            source={require("../../assets/icons/clock.png")}
                            style={styles.clockIcon}
                        />
                        <CustomText fontSize={9} fontFamily={fontFamily.medium}>
                            8 MINS
                        </CustomText>
                    </View>

                    <CustomText fontSize={12} fontFamily={fontFamily.medium} numberOfLines={2} style={{ marginVertical: 4 }}>
                        {item?.name}
                    </CustomText>

                    <View style={styles.priceContainer}>
                        <View>
                            <CustomText fontSize={12} fontFamily={fontFamily.medium}>
                                ₹{item?.price}
                            </CustomText>
                            <CustomText fontSize={12} fontFamily={fontFamily.medium} style={{ opacity: 0.8, textDecorationLine: 'line-through' }}>
                                ₹{item?.discountPrice}
                            </CustomText>
                        </View>

                        <UniversalAdd item={item} />
                    </View>
                </View>
            </View>
        </BouncePress>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
    },
    container: {
        width: '44.8%',
        borderRadius: 10,
        backgroundColor: colors.white,
        marginBottom: 10,
        marginLeft: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    fallBackView: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        zIndex: -1
    },
    fallBackImage: {
        width: "78%",
        height: "78%",
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    content: {
        flex: 1,
        paddingHorizontal: 10
    },
    flexRow: {
        flexDirection: 'row',
        padding: 2,
        paddingRight: 4,
        borderRadius: 4,
        alignItems: 'center',
        gap: 2,
        backgroundColor: colors.backgroundSecondary,
        alignSelf: 'flex-start'
    },
    clockIcon: {
        width: 15,
        height: 15
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 7,
        paddingBottom: 12,
        marginTop: 'auto',
    }
})