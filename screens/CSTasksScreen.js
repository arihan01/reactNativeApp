import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import {TextInput, Button} from 'react-native-paper'
import NewCSTaskScreen from './NewCSTaskScreen'

const CSStack = createNativeStackNavigator();


const CS = () => {
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
                    <DataTable.Cell>Under Review</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Under Review</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Under Review</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </ScrollView>
    )
}

const CSTasksScreen = ({navigation}) => {
    return (
        <CSStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <CSStack.Screen name="CSTasks" component={CS} options={{title:"Created Tickets", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>),
                headerRight: () => (
                    <Icon.Button name='add' size={25}
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.navigate('NewTask')}></Icon.Button>)}}/>
            <CSStack.Screen name="NewTask" component={NewCSTaskScreen} options={{title:'Create New Ticket'}}/>
        </CSStack.Navigator> 
    )
}

export default CSTasksScreen