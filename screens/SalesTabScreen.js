import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SalesLeadsScreen from './SalesLeadsScreen';
import SalesScheduleScreen from './SalesScheduleScreen';
import SalesActivityScreen from './SalesActivityScreen';


const Tab = createMaterialBottomTabNavigator();


const UploadTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="Sales"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="SalesLead"
        component={SalesLeadsScreen}
        options={{
          tabBarLabel: 'Leads/Opportunities',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="currency-usd" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SalesSchedule"
        component={SalesScheduleScreen}
        options={{
          tabBarLabel: 'Sales',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SalesActivity"
        component={SalesActivityScreen}
        options={{
          tabBarLabel: 'Recent Activity',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="progress-clock" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default UploadTabScreen
