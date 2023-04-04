import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MarketingScreen from './MarketingScreen';
import MarketingScheduleScreen from './MarketingScheduleScreen';
import MarketingActivityScreen from './MarketingActivityScreen';


const Tab = createMaterialBottomTabNavigator();


const MarketingTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="Marketing"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="Marketing"
        component={MarketingScreen}
        options={{
          tabBarLabel: 'Campaigns',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MarketingSchedule"
        component={MarketingScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MarketingActivity"
        component={MarketingActivityScreen}
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

export default MarketingTabScreen
