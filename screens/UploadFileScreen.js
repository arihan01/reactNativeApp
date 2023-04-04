import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {TextInput, Button} from 'react-native-paper'

const UploadFileStack = createNativeStackNavigator();


const UploadFile = () => {
    return (
        <View backgroundColor='white' style={{flex:1, alignItems:'center', justifyContent:'center',}}>
            <Button mode="contained" buttonColor='#c4fbac' textColor='black' style={{width:150}}>Upload File</Button>
        </View>
    )
}

const UploadFileScreen = ({navigation}) => {
    return (
        <UploadFileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <UploadFileStack.Screen name="UploadFiles" component={UploadFile} options={{title:"Upload a File", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>)}}/>
        </UploadFileStack.Navigator> 
    )
}

export default UploadFileScreen