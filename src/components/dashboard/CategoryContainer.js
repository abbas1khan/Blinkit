import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryContainer = () => {
    return (
        <View style={styles.container}>
            <Text>CategoryContainer</Text>
        </View>
    )
}

export default CategoryContainer

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 25
    }
})