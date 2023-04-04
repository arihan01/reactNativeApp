import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {TextInput, Button} from 'react-native-paper'

const UploadStack = createNativeStackNavigator();


const Upload = () => {
    return (
        <View backgroundColor='white' style={{flex:1, alignItems:'center', justifyContent:'center',}}>
            <Button mode="contained" buttonColor='#c4fbac' textColor='black' style={{width:250}}>Upload using Camera</Button>
        </View>
    )
}

const UploadScreen = ({navigation}) => {
    return (
        <UploadStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <UploadStack.Screen name="Uploads" component={Upload} options={{title:"Upload using Camera", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>)}}/>
        </UploadStack.Navigator> 
    )
}

export default UploadScreen