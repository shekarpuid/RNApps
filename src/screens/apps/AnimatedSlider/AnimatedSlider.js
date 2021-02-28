import React from 'react'
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

//We declare this here because the device width will be used for scrollView again
const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);
//Screen component
const Screen = props => {

    const transitionAnimation = index => {
        return {
            transform: [
                { perspective: 800 },
                {
                    scale: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * SCREEN_WIDTH,
                            index * SCREEN_WIDTH,
                            (index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: [0.25, 1, 0.25]
                    })
                },
                {
                    rotateX: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * SCREEN_WIDTH,
                            index * SCREEN_WIDTH,
                            (index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: ["45deg", "0deg", "45deg"]
                    })
                },
                {
                    rotateY: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * SCREEN_WIDTH,
                            index * SCREEN_WIDTH,
                            (index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: ["-45deg", "0deg", "45deg"]
                    })
                }
            ]
        };
    };
    return (
        <View style={styles.scrollPage}>
            <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
                <Text style={styles.text}>{props.text}</Text>
            </Animated.View>
        </View>
    );
};

const AnimatedSlider = () => {
    return (
        <>
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                    { useNativeDriver: true }
                )}
                horizontal
                pagingEnabled
                style={styles.scrollView}
            >
                <Screen text="Screen 1" index={0} />
                <Screen text="Screen 2" index={1} />
                <Screen text="Screen 3" index={2} />
                <Screen text="Screen 4" index={3} />
                <Screen text="Screen 5" index={4} />
            </Animated.ScrollView>
        </>
    )
}

//Styles
const styles = StyleSheet.create({
    scrollView: {backgroundColor: '#31D4FE'},
    scrollPage: {
        width: SCREEN_WIDTH,
        padding: 20
    },
    screen: {
        height: 600,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "white"
    },
    text: {
        fontSize: 45,
        fontWeight: "bold"
    }
});

export default AnimatedSlider