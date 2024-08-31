import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { isAndroid } from '../../utils/Theme'

const Header = ({ showNotice = () => { } }) => {
    return (
        <View style={styles.subContainer}>
            <Text>Header</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: isAndroid ? 10 : 5,
        justifyContent: 'space-between'
    }
})