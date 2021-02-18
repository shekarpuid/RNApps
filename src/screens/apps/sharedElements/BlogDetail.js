import React, { memo } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import styles from '../../../Styles'

const BlogDetail = (props) => {
    const { item } = props.route.params
    const {width, height} = Dimensions.get('window')
    return (
        <>
            <View style={[styles.flex1, {padding: 20}]}>
                <Text style={styles.mb15}>{item.title}</Text>
                <View style={{justifyContent: 'center'}}>
                    <SharedElement id={`item.${item.id}.photo`}>
                        <Image source={item.photoUrl} 
                            style={{width: width - 40, height: 200}} 
                            resizeMode='cover'
                        />
                    </SharedElement>
                </View>
            </View>
        </>
    )
}

export default memo(BlogDetail)