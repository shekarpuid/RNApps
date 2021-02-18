import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Local imports
import Home from './screens/Home'
import TodoApp from './screens/apps/todo/TodoApp'

// Navogators
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const StackNavigator = ({ navigation }) => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
)

const Routes = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={StackNavigator} />
                    <Drawer.Screen options={{title: 'Todo App'}} name="TodoApp" component={TodoApp} />
                    
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes