import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SideBar = ({
    categories,
    selectedCategory,
    onCategoryPress = () => { }
}) => {
    return (
        <View style={styles.container}>
            <Text>SideBar</Text>
        </View>
    )
}

export default SideBar

const styles = StyleSheet.create({
    container: {
        width: '24%'
    }
})