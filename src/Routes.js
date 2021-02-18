import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

// Local imports
import Home from './screens/Home'
import TodoApp from './screens/apps/todo/TodoApp'
import Blog from './screens/apps/sharedElements/Blog'
import BlogDetail from './screens/apps/sharedElements/BlogDetail'

// Navogators
const HomeStack = createStackNavigator()
const BlogStack = createSharedElementStackNavigator()

const Drawer = createDrawerNavigator()

const HomeStackNavigator = ({ navigation }) => (
    <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
)
const BlogStackNavigator = ({ navigation }) => (
    <BlogStack.Navigator initialRouteName="Blog" screenOptions={{ headerShown: false }} mode='modal'>
        <BlogStack.Screen name="Blog" component={Blog} />
        <BlogStack.Screen name="BlogDetail" component={BlogDetail} 
            sharedElementsConfig={(route, otherRoute, showing) => {
                const { item } = route.params;
                return [`item.${item.id}.photo`];
              }}
        />
    </BlogStack.Navigator>
)

const Routes = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={HomeStackNavigator} />
                    <Drawer.Screen options={{title: 'Todo App'}} name="TodoApp" component={TodoApp} />
                    <Drawer.Screen options={{title: 'Shared Elements'}} name="Blog" component={BlogStackNavigator} />
                    
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes