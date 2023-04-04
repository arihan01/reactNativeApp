import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import {TextInput, Button} from 'react-native-paper'
import NewCampaignScreen from './NewCampaignScreen';

const MarketingStack = createNativeStackNavigator();

const LeadsOpurs = ({route}) => {
    return (
        <View>
            <Text>{route.params.name}</Text>
            <Text>{route.params.description}</Text>
        </View>
    )
}

const Marketing = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#fff">
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Campaign</DataTable.Title>
                    <DataTable.Title>Content</DataTable.Title>
                </DataTable.Header>
                <TouchableOpacity onPress={() => navigation.navigate('Campaign Desc', {
                    name: 'Christmas Campaign',
                    description: 'Christmas Campaign',
                })}>
                <DataTable.Row>
                    <DataTable.Cell>Christmas Campaign</DataTable.Cell>
                    <DataTable.Cell>Christmas campaign</DataTable.Cell>
                </DataTable.Row>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Campaign Desc', {
                    name: 'New year Campaign',
                    description: 'New year Campaign',
                })}>
                <DataTable.Row>
                    <DataTable.Cell>New Year Campaign</DataTable.Cell>
                    <DataTable.Cell>New year campaign</DataTable.Cell>
                </DataTable.Row>
                </TouchableOpacity>
            </DataTable>
        </ScrollView>
    )
}

const MarketingScreen = ({navigation}) => {
    return (
        <MarketingStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <MarketingStack.Screen name="Marketing" component={Marketing} options={{title:"Campaign", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>),
                headerRight: () => (
                    <Icon.Button name='add' size={25}
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.navigate('Campaign')}></Icon.Button>)}}/>
            <MarketingStack.Screen name="Campaign" component={NewCampaignScreen} options={{title:"Create new Campaign"}}/>
            <MarketingStack.Screen name="Campaign Desc" component={LeadsOpurs} options={{title:"Campaign"}}/>
        </MarketingStack.Navigator> 
    )
}

export default MarketingScreen