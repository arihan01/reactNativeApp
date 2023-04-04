import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import {TextInput, Button} from 'react-native-paper'
import NewLeadScreen from './NewLeadScreen';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const SalesStack = createNativeStackNavigator();


const LeadsOpurs = ({route}) => {
    return (
        <View>
            <Text>{route.params.name}</Text>
            <Text>{route.params.description}</Text>
        </View>
    )
}


const Sales = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Leads/Operators</DataTable.Title>
                    <DataTable.Title>Description</DataTable.Title>
                </DataTable.Header>
                <TouchableOpacity onPress={() => navigation.navigate('Lead/Opportunities', {
                    name: 'Tinosys INC',
                    description: 'A cloud service company trying its best to work for you',
                })}>
                <DataTable.Row>
                    <DataTable.Cell>Tinosys INC</DataTable.Cell>
                    <DataTable.Cell>A cloud service company trying its best to work for you</DataTable.Cell>
                </DataTable.Row>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Lead/Opportunities', {
                    name: 'Random INC',
                    description: 'Random company does any random job you want it to do',
                })}>
                <DataTable.Row>
                    <DataTable.Cell>Random INC</DataTable.Cell>
                    <DataTable.Cell>Random company does any random job you want it to do</DataTable.Cell>
                </DataTable.Row>
                </TouchableOpacity>
            </DataTable>
        </ScrollView>
    )
}

const SalesLeadsScreen = ({navigation}) => {
    return (
        <SalesStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <SalesStack.Screen name="SalesLeads" component={Sales} options={{title:"Sales Leads", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>),
                headerRight: () => (
                    <Icon.Button name='add' size={25}
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.navigate('NewLead')}></Icon.Button>)}}
                />
            <SalesStack.Screen name='NewLead' component={NewLeadScreen} options={{title:'Create New Lead'}}/>
            <SalesStack.Screen name='Lead/Opportunities' component={LeadsOpurs}/>
        </SalesStack.Navigator> 
    )
}

export default SalesLeadsScreen