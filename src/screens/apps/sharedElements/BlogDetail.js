import React, { memo } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, Platform, ImageBackground } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import Ionicon from 'react-native-vector-icons/Ionicons'
import styles from '../../../Styles'

const BlogDetail = (props) => {
    const { navigation, route } = props
    const { item } = route.params
    const { width, height } = Dimensions.get('window')
    return (
        <>
            <View style={[styles.flex1, { paddingVertical: 0 }]}>
                <SharedElement id={`item.${item.id}.photo`}>
                    <ImageBackground source={item.photoUrl}
                        style={{ width: width - 0, height: height / 3 }}
                        resizeMode='cover'
                    >
                        {Platform.OS === 'ios' &&
                            <TouchableOpacity onPress={() => navigation.goBack()}
                                style={[styles.vhCenter, { 
                                    marginLeft: 10, top: 10, marginBottom: 10,alignSelf: 'flex-start',
                                    width: 35, height: 35, borderRadius: 35/2, backgroundColor: '#F79302'
                                }]}
                            >
                                <Ionicon name='ios-arrow-back' size={27} color="#fff" />
                            </TouchableOpacity>}
                    </ImageBackground>
                </SharedElement>
                <Text style={[styles.mb15, { paddingLeft: 20, paddingTop: 10, fontSize: 25, fontWeight: 'bold' }]}>{item.title}</Text>

            </View>
        </>
    )
}

export default memo(BlogDetail)