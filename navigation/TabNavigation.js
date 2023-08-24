import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import Account from '../screens/Account';
import History from '../screens/History';
import tw from "twrnc"


export default function TabNavigation() {

  const Tab = createBottomTabNavigator();

  return (

      <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: {borderTopLeftRadius: 25, borderTopRightRadius: 25}}}
      // tabBarOptions={{
      //   style: {backgroundColor: "red"}
      // }}
      >
        <Tab.Screen
        name="Home"
        component={Home}
        style={tw`hidden`}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size}) => (
            <Ionicons name = "home" color ={color} size = {size} />
          )
        }}
        />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          // tabBarLabel: "History",
          tabBarIcon: ({ color, size}) => (
            <Ionicons name = "clipboard" color ={color} size = {size} />
          )
        }}
        />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size}) => (
            <Ionicons name = "person" color ={color} size = {size} />
          )
        }}
        />
      </Tab.Navigator>

  )
}

const style = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20, // Adjust this value as needed
    borderTopRightRadius: 20, // Adjust this value as needed
    overflow: 'hidden', // This is important to properly clip the rounded corners
    // Other styles for your container view
  },
});