import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator()

const Routes: React.FC = () => (
    <NavigationContainer>
        <Navigator>
            <Screen name="Following" component={View} />
            <Screen name="Discover" component={View} />
            <Screen name="Browse" component={View} />
            <Screen name="Esports" component={View} />
        </Navigator>
    </NavigationContainer>
)

export default Routes
