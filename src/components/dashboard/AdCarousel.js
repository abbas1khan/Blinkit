import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import { sizes } from '../../utils/Theme'
import { adData } from '../../constants/dummyData'
import BouncePress from '../common/BouncePress'

const AdCarousel = () => {
    return (
        <View style={styles.container}>
            <Carousel
                width={sizes.width}
                height={sizes.width * 0.5}
                vertical={false}
                loop
                pagingEnabled
                snapEnabled
                autoPlay
                autoPlayInterval={3000}
                mode='parallax'
                data={adData}
                modeConfig={{
                    parallaxScrollingOffset: 0,
                    parallaxScrollingScale: 0.94
                }}
                renderItem={renderImages}
            />
        </View>
    )
}

const renderImages = ({ item }) => {
    return (
        <BouncePress style={styles.imageContainer}>
            <Image
                source={item}
                style={styles.image}
            />
        </BouncePress>
    )
}

export default AdCarousel

const styles = StyleSheet.create({
    container: {
        left: -20,
        marginVertical: 20
    },
    imageContainer: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    }
})