import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {DataTable} from 'react-native-paper'
import {TextInput, Button} from 'react-native-paper'
import { List } from 'react-native-paper';
import NewOperatorsScreen from './NewOperatorsScreen';

const SalesStack = createNativeStackNavigator();


const Sales = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  
    return (
        <List.Section>
            <List.Subheader>Recent Activity</List.Subheader>
            <TouchableOpacity>
                <List.Item onPress title="Call Scheduled" left={() => <List.Icon icon="arrow-right-bottom" />} />
                <List.Item title="Call Cancelled" left={() => <List.Icon icon="arrow-right-bottom" />}/>
            </TouchableOpacity>
        </List.Section>
    )
}

const SalesActivityScreen = ({navigation}) => {
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
            <SalesStack.Screen name="SalesActivity" component={Sales} options={{title:"Sales Activity", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>),
                headerRight: () => (
                    <Icon.Button name='add' size={25}
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.navigate('NewOperators')}></Icon.Button>)}}/>
            <SalesStack.Screen name="NewOperators" component={NewOperatorsScreen} options={{title:'Create New Operator'}}/>
        </SalesStack.Navigator> 
    )
}

export default SalesActivityScreen