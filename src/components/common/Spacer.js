import React from 'react'
import { View } from 'react-native'

const Spacer = ({ gap = 0, horizontal = false }) => {
    const sizeStyle = horizontal ? { width: gap } : { height: gap }

    return (
        <View style={sizeStyle} />
    )
}

export default Spacer