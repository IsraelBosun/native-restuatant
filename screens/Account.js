import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { MapPinIcon, UserCircleIcon, PencilSquareIcon, LanguageIcon, ChevronLeftIcon, ArrowDownIcon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, StarIcon, ArrowUpTrayIcon  } from "react-native-heroicons/outline";
import List from '../components/List';


export default function Account({item}) {
  return (
    <View style={tw`bg-[#E5E5E5] flex-1`}>
      <View style={tw`flex-row items-center mx-4 rounded-xl justify-between px-6 mt-12 bg-white py-3`}>
        <TouchableOpacity>
        <Image source={require("../assets/imagess/human.png")} style={tw``} />
        </TouchableOpacity>
        <View>
          <Text style={tw`text-lg font-semibold`}>Sadek Hossen</Text>
          <Text>sadekhossen@gmail.com</Text>
        </View>
        <TouchableOpacity style={tw`relative bg-[#F9F9F9] p-1 rounded-md `}>
        <BellIcon size="25" color="black" />
        <Text style={tw`bg-red-600 w-4 text-center h-4 text-[10px] absolute top-[-3] left-5 rounded-full text-white`}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row items-center justify-between px-6 py-5 mx-4 mt-10 bg-white rounded-xl`}>
        <View style={tw`flex-row gap-3 items-center `}>
          <TouchableOpacity>
        <UserCircleIcon size="25" color="black" />
          </TouchableOpacity>
        <Text style={tw`text-lg`}>Account Setting</Text>
        </View>
        <TouchableOpacity>
        <PencilSquareIcon size="25" color="black" />
        </TouchableOpacity>
      </View>

      <View style={tw`flex gap-5 items-center  py-5 mx-4 mt-10 bg-white rounded-xl`}>
        {/* <View style={tw`flex-row items-center gap-[130px]`}>
          <View style={tw`flex-row items-center gap-5`}>
          <LanguageIcon size="25" color="black" />
          <Text style={tw`text-lg`}>Language</Text>
          </View>
          <ArrowDownIcon size="25" color="black" />
        </View> */}
        <List item="Language" icon={<LanguageIcon size="25" color="black" />}/>
        <List item="Feedback" icon={<ChatBubbleOvalLeftEllipsisIcon size="25" color="black" />}/>
        <List item="Rate-us" icon={<StarIcon size="25" color="black" />}/>
        <List item="Upgrade" icon={<ArrowUpTrayIcon size="25" color="black" />}/>

      </View>
    </View>
  )
}