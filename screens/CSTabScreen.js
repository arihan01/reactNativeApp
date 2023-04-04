import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SoftwareStacksScreen from './SoftwareStacksScreen'
import CSTasksScreen from './CSTasksScreen';
import CSScheduleScreen from './CSScheduleScreen';
import CSActivityScreen from './CSActivityScreen';


const Tab = createMaterialBottomTabNavigator();


const CSTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="CustomerService"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="CS"
        component={CSTasksScreen}
        options={{
          tabBarLabel: 'Customer Service Tickets',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-agent" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CSSched"
        component={CSScheduleScreen}
        options={{
          tabBarLabel: 'Customer Service Schedule',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CSActivities"
        component={CSActivityScreen}
        options={{
          tabBarLabel: 'Customer Service Activity',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="progress-clock" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default CSTabScreen
