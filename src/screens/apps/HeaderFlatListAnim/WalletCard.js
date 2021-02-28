import React from "react";
import { Animated, Dimensions, StyleSheet, Text, Image } from "react-native";
import Card, {
    Cards,
    CARD_HEIGHT as DEFAULT_CARD_HEIGHT,
} from "./Card"

const { width, height: wHeight } = Dimensions.get("window");
// const ratio = 228 / 362;
// const CARD_WIDTH = width * 0.8;
// const DEFAULT_CARD_HEIGHT = CARD_WIDTH * ratio;

const MARGIN = 16;
const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const height = wHeight - 64;

const styles = StyleSheet.create({
    card: {
        marginVertical: MARGIN,
        alignSelf: "center",
    },
    // image: {
    //     width: CARD_WIDTH,
    //     height: DEFAULT_CARD_HEIGHT,
    //   },
});

const WalletCard = ({ type, y, index }) => {
    const position = Animated.subtract(index * CARD_HEIGHT, y);
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = height - CARD_HEIGHT;
    const isAppearing = height;
    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, 0.00001 + index * CARD_HEIGHT],
                outputRange: [0, -index * CARD_HEIGHT],
                extrapolateRight: "clamp",
            })
        ),
        position.interpolate({
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CARD_HEIGHT / 4],
            extrapolate: "clamp",
        })
    );
    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: "clamp",
    });
    const opacity = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
    });
    return (
        <Animated.View
            style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}
            key={index}
        >
            <Card {...{ type }} />
            {/* <Card type={type} /> */}
            {/* <Image style={styles.image} source={type} /> */}
        </Animated.View>
    );
};

export default WalletCard