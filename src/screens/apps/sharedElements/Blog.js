import React, { memo } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import styles from '../../../Styles'

const Blog = (props) => {
    const { navigation } = props
    const {width, height} = Dimensions.get('window')
    const items = [
        {id: 12, photoUrl: require('../../../assets/images/oil.jpg'), title: 'Oil Spill Poses, Mauritius'},
        {id: 7, photoUrl: require('../../../assets/images/dubai.jpg'), title: 'Dubai'},
        {id: 6, photoUrl: require('../../../assets/images/blog4.jpeg'), title: 'Dubai Red Fort'},
        {id: 4, photoUrl: require('../../../assets/images/blog2.jpg'), title: 'Mardi Gras House'},
        {id: 10, photoUrl: require('../../../assets/images/run.jpg'), title: 'The Runkerry Trail in Northern Ireland'},
        {id: 9, photoUrl: require('../../../assets/images/stmarks.jpg'), title: 'St Mark’s Square, Venice'},
        {id: 11, photoUrl: require('../../../assets/images/ship.jpg'), title: 'Quantum of the Seas'},
        {id: 5, photoUrl: require('../../../assets/images/blog3.jpeg'), title: 'Eiffel Tower, Paris'},
        {id: 1, photoUrl: require('../../../assets/images/macadonio.jpg'), title: 'Oaxaca City’s Macedonio Alcala pedestrian street at sunset'},
        {id: 3, photoUrl: require('../../../assets/images/blog1.jpg'), title: 'South Africa'},
        {id: 8, photoUrl: require('../../../assets/images/coastal.jpg'), title: 'Quieter coastal areas, such as the Gower in Wales'},
        {id: 2, photoUrl: require('../../../assets/images/Bali.jpeg'), title: 'Bali'},
    ]

    const renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => navigation.push('BlogDetail', { item })}>
                <SharedElement id={`item.${item.id}.photo`}>
                    <Image source={item.photoUrl} style={{margin: 7.5, borderRadius: 20, 
                        width: width/2 - 15, height: 130}} resizeMode='cover' />
                </SharedElement>
            </TouchableOpacity>
        );
    }

    return (
        <>
            <View>
                <Text style={[styles.heading, {marginTop: 15, alignSelf: 'center', color: '#000'}]}>Blog Posts</Text>
                <FlatList numColumns={2} contentContainerStyle={{paddingBottom: 80}}
                    data={items} keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return renderItem(item)
                    }}
                />
                {/* {renderItem()} */}
            </View>
        </>
    )
}

export default memo(Blog)