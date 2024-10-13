import { Modal, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamily, sizes } from '../utils/Theme'
import CustomText from '../components/common/CustomText'
import { storage, tokenStorage } from '../state/storage'
import { resetAndNavigate } from '../utils/NavigationUtil'
import { useCartStore } from '../state/CartStore'

const LogoutModal = ({ modalVisible = false, setModalVisible = () => { } }) => {

    const { clearCart } = useCartStore()

    const onLogoutPress = () => {
        setModalVisible(false)
        clearCart()
        tokenStorage.clearAll()
        storage.clearAll()
        resetAndNavigate("CustomerLoginScreen")
    }

    return (
        <Modal
            visible={modalVisible}
            transparent
            animationType='fade'
            onRequestClose={() => setModalVisible(false)}
        >
            <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.container}
            >
                <Pressable style={styles.textContainer}>

                    <StatusBar backgroundColor={colors.rgbaBlack(0.6)} />

                    <CustomText fontFamily={fontFamily.medium} color={colors.text2}>
                        Are you sure you want to log out?
                    </CustomText>

                    <View style={styles.buttonsContainer}>
                        <Pressable
                            onPress={() => setModalVisible(false)}
                            hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
                        >
                            <CustomText fontSize={15} fontFamily={fontFamily.medium} color={colors.secondary}>
                                No
                            </CustomText>
                        </Pressable>

                        <Pressable
                            onPress={() => onLogoutPress()}
                            hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
                        >
                            <CustomText fontSize={15} fontFamily={fontFamily.medium} color={colors.secondary}>
                                Yes
                            </CustomText>
                        </Pressable>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
}

export default LogoutModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.rgbaBlack(0.6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 25,
        paddingVertical: 20,
        maxWidth: sizes.width * 0.85
    },
    buttonsContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        marginTop: 25
    }
})