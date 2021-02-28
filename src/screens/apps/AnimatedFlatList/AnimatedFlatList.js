import React from 'react'
import {View, Text, FlatList, Animated} from 'react-native'
import styles from '../../../Styles'

const AnimatedFlatList = () => {
    const SPACING = 20
    const BOX_HEIGHT = 70
    const ITEM_SIZE = 70 + 20
    const scrollY = React.useRef(new Animated.Value(0)).current
    const data = [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
        {id: '6'},
        {id: '7'},
        {id: '8'},
        {id: '9'},
        {id: '10'},
        {id: '11'},
        {id: '12'},
        {id: '13'},
        {id: '14'},
        {id: '15'},
    ]
    return(
        <> 
            <Animated.FlatList
                contentContainerStyle={{padding: SPACING}}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        -1, 0, ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]
                    const opacityInputRange = [
                        -1, 0, ITEM_SIZE * index,
                        ITEM_SIZE * (index + 1)
                    ]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    return <Animated.View style={[styles.faBox, styles.vhCenter, {
                        height: BOX_HEIGHT,
                        opacity,
                        transform: [{ scale }]
                    }
                    ]}>
                        <Text style={styles.faBoxTitle}>Box {index + 1}</Text>
                    </Animated.View>
                }}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    { useNativeDriver: true }
                )}
            />
        </>
    )
}

export default AnimatedFlatList