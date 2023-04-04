import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TasksScreen from './TasksScreen'
import ScheduleScreen from './ScheduleScreen'
import ActivityScreen from './ActivityScreen'
import FTScreen from './FTScreen';
import FTSentScreen from './FTSentScreen';
import FTSavedScreen from './FTSavedScreen';
import FTScheduleScreen from './FTScheduleScreen';
import FTActivityScreen from './FTActivityScreen';

const Tab = createMaterialBottomTabNavigator();


const FTTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="FT"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="FTTab"
        component={FTScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FTScheduleJob"
        component={FTScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FTSActivityJob"
        component={FTActivityScreen}
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

export default FTTabScreen
