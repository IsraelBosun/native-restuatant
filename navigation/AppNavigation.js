import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Onboardingg from '../screens/Onboarding'
import Welcome from '../screens/Welcome'
import Creation from '../screens/Create&Login'
import Create from '../screens/Create'
import Login from '../screens/Login'
import { getItem } from '../utils/AsyncStorage'
import UseAuth from '../hooks/UseAuth'
import NewPassword from '../screens/NewPassword'
import Home from '../screens/Home'



const Stack = createNativeStackNavigator()



export default function AppNavigation() {

  const {user} = UseAuth()



  const [showOnboard, setShowOnboard] = useState(null);

  useEffect(()=> {
    checkIfAlreadyOnboarded()
  },[])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem("onboarded" && "login");
    if(onboarded == "1" && onboarded== "2") {
      setShowOnboard(false);
    } else {
      setShowOnboard(true)
    }
  }

  if(showOnboard==null) {
    return null
  }

  if (showOnboard && user) {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={Onboardingg} />
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
          <Stack.Screen name="Creation" options={{headerShown: false}} component={Creation} />


          <Stack.Screen name="Create" options={{headerShown: false}} component={Create} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
          <Stack.Screen name="New" options={{headerShown: false}} component={NewPassword} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      </Stack.Navigator>
  </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={Onboardingg} />
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
          <Stack.Screen name="Creation" options={{headerShown: false}} component={Creation} />


          <Stack.Screen name="Create" options={{headerShown: false}} component={Create} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
          <Stack.Screen name="New" options={{headerShown: false}} component={NewPassword} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      </Stack.Navigator>
  </NavigationContainer>
    )
  }



  // return (
  //   <NavigationContainer>
  //       <Stack.Navigator initialRouteName='Onboarding'>
  //           <Stack.Screen name="Onboarding" options={{headerShown: false}} component={Onboardingg} />
  //           <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
  //           <Stack.Screen name="Creation" options={{headerShown: false}} component={Creation} />


  //           <Stack.Screen name="Create" options={{headerShown: false}} component={Create} />
  //           <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
  //       </Stack.Navigator>
  //   </NavigationContainer>
  // )
}