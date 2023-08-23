import { View, Text, TextInput, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native'

export default function NewPassword() {

  const navigaiton = useNavigation()

  const [email, setEmail] = useState("")

  return (
    <View style={tw`flex-1  px-4 justify-center`}>

      <View style={tw`flex mb-[200px] gap-[80px]`}>
        <View>
        <Text style={tw`font-bold text-lg`}>Forgot Password?</Text>
        <Text style={tw`text-[#BEC5D1]`}>Enter your registered email below</Text>
        </View>
        <View>
          <Text style={tw`font-semibold`}>Email Address</Text>
          <TextInput style={tw`border border-[#BEC5D1] py-2 w-full px-3 rounded-xl mt-1`} value={email} onChangeText={value => setEmail(value)} placeholder='yourname@gmail.com'/>
          <View style={tw`flex-row gap-3 mt-3`}>
            <Text style={tw`text-[#BEC5D1]`}>Remember password?</Text>
            <TouchableOpacity onPress={()=> navigaiton.navigate("Login")}>
            <Text style={tw`text-[#32B768]`}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity  style={tw`bg-[#32B768]  flex-row items-center justify-center  py-4 rounded-xl text-xl`}>
                <Text style={tw`text-white`}>Submit</Text>
        </TouchableOpacity>
   </View>
  )
}