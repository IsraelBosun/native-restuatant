import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import {Bars2Icon } from "react-native-heroicons/solid";
import { theme } from '../theme';
import { Ionicons } from "@expo/vector-icons";




export default function Creation() {

    const [active, setActive] = useState("CreateAccount")



  return (
    <View style={tw`flex-1 bg-gray-300 items-center justify-center mb-[250px] `}>
      <Image source={require('../assets/imagess/orderdone.png')} style={tw`absolute  `}/>
      <View style={tw`bg-white h-full top-[250px] rounded-tl-[50px] rounded-tr-[50px]  w-full relative `}>
        <View style={tw`flex-1`}>
            <View style={tw` items-center`}>
            <Bars2Icon size="24" color="gray" style={tw`items-center text-center`} />
            </View>
        <View style={tw`flex-row justify-around mt-3`}>
            <TouchableOpacity onPress={()=> setActive("CreateAccount")} >
                <Text style={[tw`text-[16px] font-semibold`, {color: active === "CreateAccount" ? theme.main : "black"}] }>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setActive("Login")} >
                <Text style={[tw`text-[16px] font-semibold`, {color: active === "Login" ? theme.main : "black"}] }>Login</Text>
            </TouchableOpacity>
            {/* <Ionicons name="navigate-circle-outline" size={30} color="red" /> */}
        </View>

        {/* {active === "CreateAccount" } */}

        <View style={tw`flex-1`}>
        <View style={tw`flex px-5 mt-6`}>
            <Text style={tw`font-semibold`}>Full Name</Text>
            <TextInput style={tw`border py-2 px-3 rounded-xl mt-1`} placeholder='Enter your full name'/>

            <Text style={tw`font-semibold mt-4`}>Email Address</Text>
            <TextInput style={tw`border py-2 px-3 rounded-xl mt-1`} placeholder='yourname@gmail.com'/>

            <Text style={tw`font-semibold mt-4`}>Password</Text>
            <TextInput style={tw`border py-2 px-3 rounded-xl mt-1`} secureTextEntry placeholder='1234455'/>
       
        </View>
        <View style={tw`flex-1 flex gap-2 px-4 items-center justify-center`}>
            <TouchableOpacity style={tw`bg-gray-100 w-2/3 flex items-center  py-4 rounded-xl text-xl`}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-100 w-2/3 flex items-center  py-4 rounded-xl text-xl`}>
                <Text>Sign up with Google</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
      </View>
    </View>
  )
}

















// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// export default function Creation() {
//   const [activeForm, setActiveForm] = useState('createAccount'); // Initial active form

//   const toggleForm = () => {
//     // Toggle between "createAccount" and "login" forms
//     setActiveForm(activeForm === 'createAccount' ? 'login' : 'createAccount');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ flexDirection: 'row', marginBottom: 20 }}>
//         <TouchableOpacity
//           onPress={() => setActiveForm('createAccount')}
//           style={{ paddingHorizontal: 20, paddingVertical: 10 }}
//         >
//           <Text style={{ fontWeight: activeForm === 'createAccount' ? 'bold' : 'normal' }}>Create Account</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setActiveForm('login')}
//           style={{ paddingHorizontal: 20, paddingVertical: 10 }}
//         >
//           <Text style={{ fontWeight: activeForm === 'login' ? 'bold' : 'normal' }}>Login</Text>
//         </TouchableOpacity>
//       </View>
//       {activeForm === 'createAccount' ? (
//         // Render the Create Account form here
//         <View>
//           <Text>Create Account Form</Text>
//         </View>
//       ) : (
//         // Render the Login form here
//         <View>
//           <Text>Login Form</Text>
//         </View>
//       )}
//     </View>
//   );
// }
