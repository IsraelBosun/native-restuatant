import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { ArrowRightIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import { theme } from '../theme';
import { arrivable } from '../data/Data';
import { MapPinIcon } from "react-native-heroicons/solid";



export default function Arrivable() {
  return (
    <View>
      <View style={tw`flex-row items-center justify-between px-3 mt-3`}>
        <View style={tw`flex `}>
            <Text style={tw`text-lg font-semibold`}>Today's New Arrivals</Text>
            <Text style={{color: theme.text}}>Best of today's food list update</Text>
        </View>
        <TouchableOpacity style={tw`flex-row items-center gap-3`}>
            <Text style={{color: theme.text}}>See All</Text>
            <ChevronRightIcon size="15" color="gray" />
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw``}
      >
      {
         arrivable.map((arr, index) => {
            return (
                <TouchableOpacity key={index} style={tw`bg-white ml-4 rounded-xl mt-3  `}>
                    <View style={tw`p-3`} >
                    <Image source={arr.image} style={tw`rounded-lg`} />
                    <Text style={tw`text-lg my-1 font-semibold text-[#374151]`}>{arr.food}</Text>
                    <View style={tw`flex-row gap-1`}>
                        <MapPinIcon size="20" color="green" />
                        <Text style={tw`text-xs text-[#374151]`}>{arr.location}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
            )
         })
      }
      </ScrollView>
    </View>
  )
}