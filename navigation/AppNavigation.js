import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Onboardingg from '../screens/Onboarding'
import Welcome from '../screens/Welcome'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name="Onboarding" options={{headerShown: false}} component={Onboardingg} />
            <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}