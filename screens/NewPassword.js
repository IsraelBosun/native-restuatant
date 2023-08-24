import { View, Text, TextInput, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";


export default function NewPassword() {


  const navigation = useNavigation()

  const [email, setEmail] = useState("")

  return (
    <View style={tw`  px-4 justify-center`}>
      <TouchableOpacity onPress={()=> navigation.goBack()} style={tw`mt-4`}>
      <ArrowLeftCircleIcon  size="40" color="green" />
      </TouchableOpacity>
      <View style={tw`flex mt-[90px] gap-[150px]`}>
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
      <TouchableOpacity  style={tw`bg-[#32B768]  flex-row mt-20 items-center justify-center  py-4 rounded-xl text-xl`}>
                <Text style={tw`text-white`}>Submit</Text>
        </TouchableOpacity>
   </View>
  )
}