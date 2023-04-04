import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SoftwareScheduleScreen from './SoftwareScheduleScreen'
import SoftwareStacksScreen from './SoftwareStacksScreen'
import SoftwareActivityScreen from './SoftwareActivityScreen';


const Tab = createMaterialBottomTabNavigator();


const SoftwareTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="SoftwareStacks"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="Stacks"
        component={SoftwareStacksScreen}
        options={{
          tabBarLabel: 'Stacks',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star-box-multiple-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="StackSchedule"
        component={SoftwareScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="StackActivity"
        component={SoftwareActivityScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="progress-clock" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default SoftwareTabScreen
