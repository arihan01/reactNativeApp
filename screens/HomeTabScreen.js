import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TasksScreen from './TasksScreen'
import ScheduleScreen from './ScheduleScreen'
import ActivityScreen from './ActivityScreen'

const Tab = createMaterialBottomTabNavigator();


const HomeTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="order-bool-ascending-variant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleSc"
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-month" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ActivityTab"
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Activities',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="archive-clock" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default HomeTabScreen
