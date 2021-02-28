import React, { memo } from 'react'
import { View, Text, ScrollView, Platform, StatusBar } from 'react-native'
import Animated from 'react-native-reanimated'
import styles from '../../../Styles'

const HEADER_HEIGHT = Platform.OS === 'ios' ? 75 : 70 + StatusBar.currentHeight

const HeaderFlatListAnim = () => {
    // Header animation
    const scrollY = new Animated.Value(0)
    const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT)
    const headerY = Animated.interpolate(diffClampScrollY, {
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT]
    })

    return (
        <View style={styles.flex1}>
            <Animated.View style={[
                {
                    position: 'absolute', top: 0, left: 0, right: 0, height: HEADER_HEIGHT,
                    backgroundColor: '#000', zIndex: 1000, elevation: 1000,
                    transform: [{
                        translateY: headerY
                    }]
                }, styles.vhCenter]}
            >
                <Text style={[styles.heading, { color: '#fff', marginTop: 20 }]}>Animated Header</Text>
            </Animated.View>

            <Animated.ScrollView
                onScroll={Animated.event([
                    {
                        nativeEvent: { contentOffset: { y: scrollY } }
                    }
                ], {
                    useNativeDriver: true,
                })}
                bounces={false}
                scrollEventThrottle={16}
            >
                <View style={{ marginTop: 90 }}>
                    <Text style={[styles.heading, { alignSelf: 'center' }]}>FlatList Animations</Text>
                    <View style={{ width: '100%', height: 250, backgroundColor: 'blue' }}></View>
                    <View style={{ width: '100%', height: 250, backgroundColor: 'red' }}></View>
                    <View style={{ width: '100%', height: 250, backgroundColor: 'green' }}></View>
                    <View style={{ width: '100%', height: 250, backgroundColor: 'yellow' }}></View>
                    <View style={{ width: '100%', height: 250, backgroundColor: 'orange' }}></View>
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default memo(HeaderFlatListAnim)