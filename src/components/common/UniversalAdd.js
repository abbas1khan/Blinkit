import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCartStore } from '../../state/CartStore'
import { colors, fontFamily } from '../../utils/Theme'
import CustomText from './CustomText'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize'

const UniversalAdd = ({ item }) => {

    const count = useCartStore((state) => state?.getItemCount(item?._id))
    const { addItem, removeItem } = useCartStore()

    return (
        <View style={[styles.container, { width: count > 0 ? 65 : 50, backgroundColor: count > 0 ? colors.secondary : colors.white }]}>
            {count > 0 ?
                <View style={styles.counterContainer}>
                    <Pressable
                        onPress={() => removeItem(item?._id)}
                        hitSlop={{ left: 10, right: 5, top: 5, bottom: 5 }}
                        style={styles.actionBtn}
                    >
                        <MaterialCommunityIcons name="minus" size={RFValue(16)} color={colors.white} />
                    </Pressable>

                    <CustomText fontFamily={fontFamily.semiBold} color={colors.white} adjustsFontSizeToFit style={styles.count}>
                        {count}
                    </CustomText>

                    <Pressable
                        onPress={() => { if (count < 100) { addItem(item) } }}
                        hitSlop={{ left: 5, right: 10, top: 5, bottom: 5 }}
                        style={styles.actionBtn}
                    >
                        <MaterialCommunityIcons name="plus" size={RFValue(17)} color={colors.white} />
                    </Pressable>
                </View>
                :
                <Pressable
                    onPress={() => addItem(item)}
                    style={styles.add}
                    hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
                >
                    <CustomText fontSize={12} fontFamily={fontFamily.semiBold} color={colors.secondary}>
                        ADD
                    </CustomText>
                </Pressable>
            }
        </View>
    )
}

export default UniversalAdd

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        width: 65,
        height: 30,
        borderRadius: 8,
    },
    add: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: -1
    },
    counterContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3
    },
    actionBtn: {
        height: '100%',
        justifyContent: 'center',
        top: -0.6
    },
    count: {
        flexShrink: 1,
        textAlignVertical: 'center',
        top: -1,
    },
})