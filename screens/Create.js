import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import {Bars2Icon } from "react-native-heroicons/solid";
import { theme } from '../theme';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/Firebase';





export default function Create() {

    const navigation = useNavigation()

    const [active, setActive] = useState("CreateAccount");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        if(email && password ) {
            try {
                await createUserWithEmailAndPassword( auth, email, password);
                const jsonValue = JSON.stringify(auth);
                alert(`${name} is signed up`)
                navigation.navigate("Tab")
            } catch (err) {
                console.log("got error", err.message)
                alert(err.message)
            }
        }
    }



  return (
    <View style={tw`flex-1 bg-gray-300 items-center justify-center  `}>
        <View style={tw`flex-1  mt-15`}>
      <Image source={require('../assets/imagess/orderdone.png')} style={tw` `}/>
        </View>
      <View style={tw`bg-white z-10 h-full top-[100px] rounded-t-[50px]  w-full  `}>
        <View style={tw`flex-1`}>
            <View style={tw` items-center`}>
            <Bars2Icon size="24" color="gray" style={tw`items-center text-center`} />
            </View>
        <View style={tw`flex-row justify-around mt-3`}>
            <TouchableOpacity onPress={()=> setActive("CreateAccount")} >
                <Text style={[tw`text-[16px] font-semibold`, {color: theme.main}] }>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")} >
                <Text style={[tw`text-[16px] font-semibold`, {color: theme.text}] }>Login</Text>
            </TouchableOpacity>
            {/* <Ionicons name="navigate-circle-outline" size={30} color="red" /> */}
        </View>

        {/* {active === "CreateAccount" } */}

        <View style={tw`flex-1`}>
        <View style={tw`flex px-5 mt-6`}>
            <Text style={[tw`font-semibold`, {color: theme.text}]}>Full Name</Text>
            <TextInput style={tw`border-[#BEC5D1] border py-2 px-3 rounded-xl mt-1`} value ={name} onChangeText={value => setName(value)} placeholder='Enter your full name'/>

            <Text style={tw`font-semibold mt-4 text-[#374151]`}>Email Address</Text>
            <TextInput style={tw`border-[#BEC5D1] border py-2 px-3 rounded-xl mt-1`} value ={email} onChangeText={value => setEmail(value)} placeholder='yourname@gmail.com'/>

            <Text style={tw`font-semibold mt-4 text-[#374151]`}>Password</Text>
            <TextInput style={tw`border-[#BEC5D1] border py-2 px-3 rounded-xl mt-1`} secureTextEntry value={password} onChangeText={value=> setPassword(value)} placeholder='1234455'/>
       
        </View>
        <View style={tw` flex gap-4 px-4 items-center mt-12 justify-center`}>
            <TouchableOpacity onPress={handleSubmit} style={tw`bg-[#32B768] w-2/3 flex items-center  py-4 rounded-xl text-xl`}>
                <Text style={tw`text-white`}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-100 flex-row justify-center gap-5 w-2/3 flex items-center  py-4 rounded-xl text-xl`}>
                <Image source={require('../assets/imagess/google.png')} />
                <Text style={tw`text-[#374151] font-semibold`}>Sign up with Google</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
      </View>
    </View>
  )
}

















