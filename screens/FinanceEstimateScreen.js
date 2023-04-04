import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import {TextInput, Button} from 'react-native-paper'
import NewCampaignScreen from './NewCampaignScreen';

const FinanceStack = createNativeStackNavigator();


const Finance = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Estimate</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>Estimate 1</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Estimate 2</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </ScrollView>
    )
}

const FinanceEstimateScreen = ({navigation}) => {
    return (
        <FinanceStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <FinanceStack.Screen name="Estimate" component={Finance} options={{title:"Estimate", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>)}}/>
        </FinanceStack.Navigator> 
    )
}

export default FinanceEstimateScreen