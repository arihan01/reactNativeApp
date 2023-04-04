import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => {
    return (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="SignIn" component={SignInScreen}/>
        </RootStack.Navigator>
    )
}

export default RootStackScreen
