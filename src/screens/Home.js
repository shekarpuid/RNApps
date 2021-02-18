import React, { memo } from 'react'
import {View, Text} from 'react-native'
import styles from '../Styles'

const Home = () => {
    return(
        <>
            <View style={[styles.vhCenter, styles.flex1]}>
                <Text>Home Screen</Text>
            </View>
        </>
    )
}

export default memo(Home)