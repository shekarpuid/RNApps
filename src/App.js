import React, { memo } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Routes from './Routes'
import styles from './Styles'

const App = () => {
    return (
        <>
            <SafeAreaView style={styles.flex1}>
                <Routes />
                {/* <Text>App</Text> */}
            </SafeAreaView>
        </>
    )
}

export default App