import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { MapPinIcon, UserCircleIcon, PencilSquareIcon, LanguageIcon, ChevronRightIcon, ArrowDownIcon  } from "react-native-heroicons/outline";

export default function List({item, icon}) {
  return (
    <TouchableOpacity style={tw`flex-row items-center gap-[130px]`}>
    <View style={tw`flex-row items-center justify-start gap-5`}>
    {icon}
    <Text style={tw`text-lg`}>{item}</Text>
    </View>
    <ChevronRightIcon size="25" color="black" />
  </TouchableOpacity>
  )
}