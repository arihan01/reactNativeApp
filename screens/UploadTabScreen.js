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
import UploadImgScreen from './UploadImgScreen';
import UploadScreen from './UploadScreen';
import UploadFileScreen from './UploadFileScreen';

const Tab = createMaterialBottomTabNavigator();


const UploadTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="Upload"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="UploadImg"
        component={UploadImgScreen}
        options={{
          tabBarLabel: 'Upload Image',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tooltip-image" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadCam"
        component={UploadScreen}
        options={{
          tabBarLabel: 'Upload using Camera',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadFile"
        component={UploadFileScreen}
        options={{
          tabBarLabel: 'Upload Files',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default UploadTabScreen
