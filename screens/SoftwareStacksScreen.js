import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import {TextInput, Button} from 'react-native-paper'
import NewCampaignScreen from './NewCampaignScreen';

const SoftwareStack = createNativeStackNavigator();


const Software = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Stacks</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>SMS Stack</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Marketing Stack</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </ScrollView>
    )
}

const StackScreen = ({navigation}) => {
    return (
        <SoftwareStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <SoftwareStack.Screen name="SStacks" component={Software} options={{title:"Stacks to Deploy", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>)}}/>
        </SoftwareStack.Navigator> 
    )
}

export default StackScreen