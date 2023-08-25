import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc";
import { Bars3Icon, ChevronRightIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/solid";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { LinearGradient } from 'expo-linear-gradient';
import Arrivable from '../components/Arrivable';
import Explore from '../components/Explore';
import { useNavigation } from '@react-navigation/native';



export default function Home() {


  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`  `}>
      <View style={tw`mt-5 flex-row items-center justify-between px-4`}>
        <TouchableOpacity>
        <Bars3Icon size="24" color="black" />
        </TouchableOpacity>
        <View style={tw`flex-row items-center gap-2`}>
            <MapPinIcon size="24" color="green" />
            <Text>Agrabad 435, Chittagong</Text>
        </View>
        <TouchableOpacity>
        <Image source={require("../assets/imagess/human.png")} />
        </TouchableOpacity>
      </View>
      <View style={tw`flex items-center mt-5 px-4`}>
      <View style={tw`flex-row  bg-[#E6E7E9] rounded-lg items-center px-4 py-1 gap-2 w-4/5`}>
        <MagnifyingGlassIcon size="17" color="gray" />
        <TextInput placeholder='search' />
      </View>
      </View>
      <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       style={tw`rounded-b-xl py-2 `}>
        <LinearGradient
        colors={["rgba(255, 159, 6, 1)", "rgba(255, 225, 180, 1)"]}
        style={tw`flex-row items-center rounded-2xl mt-4 h-[160px] pl-3 mx-4`}
        >
        <View style={tw`flex items-start gap-2 `}>
            <Image source={require("../assets/imagess/burger-logo.png")} />
            <Text style={tw`text-white font-bold text-xl`}>Flash Offer</Text>
            <View>
            <Text style={tw`text-white text-xs`}>We are here with the best</Text>
            <Text style={tw`text-white text-xs`}>desserts in town.</Text>
            </View>
            <TouchableOpacity style={tw`flex-row items-center gap-2 justify-center`}>
                <Text style={tw`text-white`}>Order</Text>
                <ArrowRightIcon size="15" color="white" />
            </TouchableOpacity>
        </View>
        <Image source={require("../assets/imagess/burger.png")} />
        </LinearGradient>

          <LinearGradient
        colors={["rgba(0, 215, 86, 1)", "rgba(1, 138, 197, 1)"]}
        style={tw`flex-row items-center rounded-2xl mt-4 h-[160px] pl-3 mr-4 `}
        >
        <View style={tw`flex items-start gap-2 `}>
            <Image source={require("../assets/imagess/domino.png")} />
            <Text style={tw`text-white font-bold text-xl`}>New Arrivable</Text>
            <View>
            <Text style={tw`text-white text-xs`}>We are here with the best</Text>
            <Text style={tw`text-white text-xs`}>desserts in town.</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={tw`flex-row items-center gap-2 justify-center`}>
                <Text style={tw`text-white`}>Order</Text>
                <ArrowRightIcon size="15" color="white" />
            </TouchableOpacity>
        </View>
        <Image source={require("../assets/imagess/pizza.png")} />
        </LinearGradient>
      </ScrollView>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw` pt-[10px] pb-[400px] px-2`, { flex: 1, }]}
      >
      <Arrivable />
      <Explore />
      </ScrollView>
    </SafeAreaView>
  )
}

// colors={["rgba(0, 215, 86, 1)", "rgba(1, 138, 197, 1)"]}