import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import NewFTScreens from './NewFTScreens';

const FTStack = createNativeStackNavigator();

const FT = () => {
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
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Completed</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>19-12-2022</DataTable.Cell>
                    <DataTable.Cell>FT-123-123456</DataTable.Cell>
                    <DataTable.Cell>Saved</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </ScrollView>
    )
}

const FTScreen = ({navigation}) => {
    return(
        <FTStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <FTStack.Screen name="FTS" component={FT} options={{title:"Jobs", 
                headerLeft: () => (
                    <Icon.Button name='menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>),
                headerRight: () => (
                    <Icon.Button name='add' size={25}
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.navigate('NewFT')}></Icon.Button>)}}
                />
            <FTStack.Screen name="NewFT" component={NewFTScreens} options={{title:"Create New Job"}}/>
        </FTStack.Navigator> 
    )
}

export default FTScreen
