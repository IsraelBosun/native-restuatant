import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import tw from "twrnc"
import { ArrowLeftCircleIcon, ArrowRightIcon, MapPinIcon, ClockIcon, RocketLaunchIcon } from "react-native-heroicons/solid";
import Explore from './Explore';
import { explore } from '../data/Data';
import { theme } from '../theme';


export default function Details() {

    const route = useRoute().params.exp;
    // const exp = route.params?.exp

    const navigation = useNavigation();

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row  items-center justify-start gap-15 p-5 bg-[#32B768] rounded-b-2xl`}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <ArrowLeftCircleIcon  size="25" color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white font-semibold text-lg`}>Details Restaurant</Text>
      </View>
      <View style={tw`bg-white py-5 mt-3 rounded-2xl`}>
        <View style={tw`flex my-3 px-5`} >
            <Text style={tw`font-semibold text-xl`}>{route.name}</Text>
            <View style={tw`flex-row gap-2`}>
            <MapPinIcon size="17" color="green" />
            <Text style={tw`text-gray-800`}>{route.address}</Text>
            </View>
        </View>

        <View style={tw`px-3`}>
        <Image source={route.large} style={tw``} />
        </View>

        <View style={tw`px-3 mt-4 flex-row items-center justify-between`}>
            <View style={tw`flex gap-1`}>
                <View style={tw`flex-row items-center gap-1`}>
                    <ClockIcon size="20" color="green" />
                    <Text style={tw`text-gray-800`}>Open Today</Text>
                </View>
                <Text style={tw` font-semibold`}>10:00 AM - 12:00 PM</Text>
            </View>
            <View style={tw`flex-row items-center gap-2`}>
                <RocketLaunchIcon size="20" color="blue"  />
                <Text style={tw`text-blue-700`}>Visit The Restaurant</Text>
            </View>
        </View>
      </View>



    <View style={tw`flex-1 bg-white mt-4 rounded-2xl`}>
        <Explore />
    </View>

    </View>
  )
}