import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MarketingScreen from './MarketingScreen';
import FinanceInvoiceScreen from './FinanceInvoiceScreen';
import FinancePaymentScreen from './FinancePaymentScreen';
import FinanceEstimateScreen from './FinanceEstimateScreen';


const Tab = createMaterialBottomTabNavigator();


const FinanceTabScreen = () => {



    return (
    <Tab.Navigator
      initialRouteName="Finances"
      activeColor="#586e50"
      barStyle={{ backgroundColor: '#c4fbac' }}
      shifting={true}
    >
      <Tab.Screen
        name="Invoices"
        component={FinanceInvoiceScreen}
        options={{
          tabBarLabel: 'Invoice',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={FinancePaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Estimates"
        component={FinanceEstimateScreen}
        options={{
          tabBarLabel: 'Estimate',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default FinanceTabScreen
