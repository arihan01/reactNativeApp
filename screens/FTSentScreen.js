import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import NewFTScreens from './NewFTScreens';

const FTSentStack = createNativeStackNavigator();

const FTSent = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Date</DataTable.Title>
                    <DataTable.Title>Number</DataTable.Title>
                    <DataTable.Title>Status</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Sent</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Sent</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Sent</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </ScrollView>
    )
}

const FTSentScreen = ({navigation}) => {
    return(
        <FTSentStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <FTSentStack.Screen name="FTSent" component={FTSent} options={{title:"Sent Field Tickets", 
                headerLeft: () => (
                    <Icon.Button name='menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>),
                headerRight: () => (
                    <Icon.Button name='add' size={25}
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.navigate('NewFT')}></Icon.Button>)}}
                />
            <FTSentStack.Screen name="NewFT" component={NewFTScreens} options={{title:"Create New FT"}}/>
        </FTSentStack.Navigator> 
    )
}

export default FTSentScreen
