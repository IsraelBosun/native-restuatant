import { View, Text, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import tw from "twrnc"
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/AsyncStorage';
import Lottie from "lottie-react-native"
import { ArrowRightCircleIcon } from "react-native-heroicons/solid";
import { theme } from '../theme';





const { width, height} = Dimensions.get('window');

export default function Onboardingg() {

    const navigation = useNavigation()

    const handleDone = () => {
        navigation.navigate('Welcome');
        setItem('onboarded', "1")
    }

    const doneButton = ({...props}) => {
        return (
            <TouchableOpacity style={[tw`flex items-center mr-5 px-4 py-1 rounded-full`, {backgroundColor: theme.main}]}  {...props}>
                <Text style={[tw`font-semibold text-lg text-white`]}>Done</Text>
            </TouchableOpacity>
        )
    }

  return (
    <View style={tw`flex-1 bg-white`}>
        <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            nextLabel= {<ArrowRightCircleIcon size="45" color={theme.main} />}
            containerStyles={{paddingHorizontal: 15}}
        pages={[
            {
            backgroundColor: '#a7f3d0',
            image: (
                <View style={styles.lottie}>
                    <Lottie source={require('../assets/animations/location.json')} autoPlay loop />
                </View>
            ),
            title: 'Welcome to the resurauant',
            subtitle: "Your don't have to go far to find a good restaurant we have provided all the resturant that is near you"
            },

            {
            backgroundColor: '#fef3c7',
            image: (
                <View style={styles.lottie}>
                    <Lottie source={require('../assets/animations/scan-food.json')} autoPlay loop />
                </View>
            ),
            title: 'Select Your Favorite Menu',
            subtitle: "Now eat well, you don't need to leave your house you can choose your favourite food with only one click"
            },

            {
                backgroundColor: theme.main,
                image: (
                    <View style={styles.lottie}>
                        <Lottie source={require('../assets/animations/food-delivery.json')} autoPlay loop />
                    </View>
                ),
                title: 'Your meal will be delivered at your doorstep',
                subtitle: "You can order at any time of the day we are always available"
                },
        ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    lottie: {
        width: width* 0.8,
        height: width
    },
    doneButton: {
        padding: 10
    }
})
