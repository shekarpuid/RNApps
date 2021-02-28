import React, { memo } from 'react'
import { View, FlatList, Animated } from 'react-native'
import styles from '../../../Styles'
import WalletCard from './WalletCard'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const AnimatedCards = () => {

    // Flatlist Animations
    const cards = [
        { type: require('../../../assets/images/card1.png') },
        { type: require('../../../assets/images/card2.png') },
        { type: require('../../../assets/images/card3.png') },
        { type: require('../../../assets/images/card4.png') },
        { type: require('../../../assets/images/card5.png') },
        { type: require('../../../assets/images/card6.png') }
    ]
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true,
    });

    return (
        <View style={styles.flex1}>
            <AnimatedFlatList
                data={cards}
                keyExtractor={item => item.index}
                renderItem={({ index, item }) => (
                    <WalletCard index={index} type={item.type} y={y} />
                )}
                bounces={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
            />
        </View>
    )
}

export default memo(AnimatedCards)