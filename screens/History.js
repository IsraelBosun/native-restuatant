import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { explore } from '../data/Data';
import { TouchableOpacity } from 'react-native';
import { MapPinIcon } from "react-native-heroicons/solid";
import { PlusIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import { theme } from '../theme';


export default function History() {

  const navigation = useNavigation()

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row gap-10 items-center justify-start p-5 bg-[#32B768] rounded-b-2xl`}>
      <TouchableOpacity onPress={()=> navigation.goBack()} style={tw``}>
      <ArrowLeftCircleIcon  size="35" color= "white" />
      </TouchableOpacity>
        <Text style={tw`text-white font-semibold text-lg`}>Booking History</Text>
      </View>
      <View style={tw`px-3 mt-5`}>
        {
    explore.map((exp, index) => {
        return (
            <View key={index} style={tw`flex-row items-center bg-white px-2  py-4 rounded-xl gap-3 my-2`}>
                <Image source={exp.image} />
                <View>
                    <Text style={tw`text-lg font-semibold text-[#1F2937]`}>{exp.name}</Text>
                    <View style={tw`flex-row items-center justify-around `}>
                        <View style={tw`flex-row items-center gap-2`}>
                          <MapPinIcon size="17" color="green" />
                          <Text style={tw`text-[#374151]`}>{exp.address}</Text>
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate("Details", {exp})} style={tw`bg-green-600 rounded-xl px-6 py-2 `}>
                          <Text style={tw`text-white font-semibold`}>Check</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    })
}
      </View>

      <TouchableOpacity style={tw`flex-row p-7 gap-2 items-center justify-center`}>
      <PlusIcon size="26" color="gray" />
      <Text style={tw`text-[#374151] text-lg`}>More Bookings</Text>  
      </TouchableOpacity>
    </View>
  )
}