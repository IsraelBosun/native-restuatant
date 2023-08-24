import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react';
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { theme } from '../theme';
import tw from "twrnc"
import { MapPinIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import { explore } from '../data/Data';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Explore() {

  const navigation = useNavigation()

  return (
    <View style={tw`flex-1`}>
        <View style={tw`flex-row items-center justify-between px-3 mt-3`}>
        <View style={tw`flex`}>
            <Text style={tw`text-lg font-semibold`}>Explore Restaurant</Text>
            <Text style={{color: theme.text}}>Check your city nearby restuarant</Text>
        </View>
        <TouchableOpacity style={tw`flex-row items-center gap-3`}>
            <Text style={{color: theme.text}}>See All</Text>
            <ChevronRightIcon size="15" color="gray" />
        </TouchableOpacity>
      </View>
      <View
      style={[tw` pt-[10px] pb-[50px] px-2`, { flex: 1, }]}
      >
        {/* flex-1 pt-20 pb-1 px-2 */}
      {
    explore.map((exp, index) => {
        return (
            <View key={index} style={tw`flex-row shadow-md items-center bg-white px-2 py-4 rounded-xl gap-3 my-2`}>
                <Image source={exp.image} />
                <View>
                    <Text style={tw`text-lg font-semibold text-[#1F2937]`}>{exp.name}</Text>
                    <View style={tw`flex-row items-center justify-between `}>
                        <View style={tw`flex-row items-center gap-2`}>
                          <MapPinIcon size="17" color="green" />
                          <Text style={tw`text-[#374151]`}>{exp.address}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate("Onboarding")} style={tw`bg-green-600 rounded-xl px-6 py-2 `}>
                          <Text style={tw`text-white font-semibold`}>Book</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    })
}

      </View>
    </View>
  )
}