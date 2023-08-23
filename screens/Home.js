import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc"
import { Bars3Icon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/solid";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { LinearGradient } from 'expo-linear-gradient'



export default function Home() {
  return (
    <SafeAreaView style={tw`flex-1 px-4 `}>
      <View style={tw`mt-5 flex-row items-center justify-between`}>
        <Bars3Icon size="24" color="black" />
        <View style={tw`flex-row items-center gap-2`}>
            <MapPinIcon size="24" color="green" />
            <Text>Agrabad 435, Chittagong</Text>
        </View>
        <Image source={require("../assets/imagess/human.png")} />
      </View>
      <View style={tw`flex items-center mt-5`}>
      <View style={tw`flex-row  bg-[#E6E7E9] rounded-lg items-center px-4 py-1 gap-2 w-4/5`}>
        <MagnifyingGlassIcon size="17" color="gray" />
        <TextInput placeholder='search' />
      </View>
      </View>
      <ScrollView
       horizontal
       style={tw``}>
        <LinearGradient
        colors={["rgba(255, 159, 6, 1)", "rgba(255, 225, 180, 1)"]}
        style={tw`flex-row items-center  h-[140px] px-3 `}
        >
        <View style={tw`flex items-start `}>
            <Image source={require("../assets/imagess/burger-logo.png")} />
            <Text style={tw`text-white font-bold text-xl`}>Flash Offer</Text>
            <Text style={tw`text-white text-xs`}>We are here with the best</Text>
            <Text style={tw`text-white text-xs`}>desserts in town.</Text>
            <View style={tw`flex-row items-center justify-center`}>
                <Text>Order</Text>
                <ArrowRightIcon size="24" color="white" />
            </View>
        </View>
        <Image source={require("../assets/imagess/burger.png")} />
        </LinearGradient>
        
      </ScrollView>
    </SafeAreaView>
  )
}

// colors={["rgba(0, 215, 86, 1)", "rgba(1, 138, 197, 1)"]}