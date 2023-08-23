import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  const navigaion = useNavigation()

  return (
    <View style={tw`flex-1 flex gap-19 items-center justify-center`}>
      <Image source={require('../assets/imagess/orderdone.png')} />
      <View style={tw`flex items-center gap-4 px-12 `}>
        <Text style={tw`text-2xl font-semibold`}>Welcome</Text>
        <Text style={tw`text-center text-[#4B5563]`}>Before enjoying Foodmedia services
Please register first</Text>
      </View>
      {/* <View> */}
      <View style={tw`flex gap-3 w-2/3`}>
        <TouchableOpacity onPress={()=> navigaion.navigate("Create")} style={[tw`bg-[#32B768] px-6 py-3 rounded-lg flex items-center`, {borderColor: theme.main}]}>
          <Text style={tw`text-white`}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigaion.navigate("Login")}  style={[tw`bg-[#D1FAE5] px-6 py-3 rounded-lg flex items-center`, {borderColor: theme.main}]}>
          <Text style={tw`text-[#32B768] font-bold`}>Login</Text>
        </TouchableOpacity>
        <Text style={tw`text-xs text-center`}>By loging in Or Registering, You Have Agreed To <Text style={tw`text-[#32B768]`}>The Terms And Conditions <Text style={tw`text-black`}>And</Text> Privacy Policy</Text> </Text>
      </View>
    {/* </View> */}
    </View>
  )
}