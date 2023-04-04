import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {TextInput, Button} from 'react-native-paper'

const UploadImgStack = createNativeStackNavigator();


const UploadImg = () => {
    return (
        <View backgroundColor='white' style={{flex:1, alignItems:'center', justifyContent:'center',}}>
            <Button mode="contained" buttonColor='#c4fbac' textColor='black' style={{width:150}}>Upload Img</Button>
        </View>
    )
}

const UploadImgScreen = ({navigation}) => {
    return (
        <UploadImgStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <UploadImgStack.Screen name="Uploads" component={UploadImg} options={{title:"Upload Image", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>)}}/>
        </UploadImgStack.Navigator> 
    )
}

export default UploadImgScreen