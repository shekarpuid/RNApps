import React, { memo, useState } from 'react'
import { View, Text } from 'react-native'
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin'
GoogleSignin.configure({
    webClientId: '580917097209-dcs987nne134ope8nbucv10u7rurefod.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true,
})
import styles from '../Styles'

const Home = () => {
    const [userInfo, setUserInfo] = useState({})
    const [loaded, setLoaded] = useState(false)
    
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserInfo(userInfo)
            setLoaded(true)
        } catch (error) {
            console.log(error)
            // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            //     // user cancelled the login flow
            // } else if (error.code === statusCodes.IN_PROGRESS) {
            //     // operation (e.g. sign in) is in progress already
            // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            //     // play services not available or outdated
            // } else {
            //     // some other error happened
            // }
        }
    }
    return (
        <>
            <View style={[styles.vhCenter, styles.flex1]}>
                <Text>Home Screen</Text>
                <GoogleSigninButton
                    onPress={() => signIn()}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    style={{ width: 192, height: 48 }}
                />
                {loaded ?
                    <View>
                        <Text>{userInfo.user.name}</Text>
                        <Text>{userInfo.user.email}</Text>
                    </View>
                    : <Text>Not signed in</Text>
                }
            </View>
        </>
    )
}

export default memo(Home)