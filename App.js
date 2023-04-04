/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import FTScreen from './screens/FTScreen';
import DrawerContent from './screens/DrawerContent';
import UploadScreen from './screens/UploadScreen';
import RootStackScreen from './screens/RootStackScreen'
import {AuthContext} from './components/context'
import FourthScreen from './screens/FourthScreen';
import HomeTabScreen from './screens/HomeTabScreen';
import FTTabScreen from './screens/FTTabScreen';
import UploadTabScreen from './screens/UploadTabScreen';
import SalesTabScreen from './screens/SalesTabScreen';
import MarketingTabScreen from './screens/MarketingTabScreen';
import FinanceTabScreen from './screens/FinanceTabScreen';
import SoftwareTabScreen from './screens/SoftwareTabScreen'
import CSTabScreen from './screens/CSTabScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("sdfv")
      setIsLoading(false)
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    }
  }))

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  if(isLoading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigation}>
      {
        userToken != null ? (

            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{header: () => null}} initialRouteName="Home">
              <Drawer.Screen name="HomeDrawer" component={HomeTabScreen}/>
              <Drawer.Screen name="FT" component={FTTabScreen}/>
              <Drawer.Screen name="Upload" component={UploadTabScreen}/>
              <Drawer.Screen name="Sale" component={SalesTabScreen}/>
              <Drawer.Screen name="Market" component={MarketingTabScreen}/>
              <Drawer.Screen name="Finance" component={FinanceTabScreen}/>
              <Drawer.Screen name="Stack" component={SoftwareTabScreen}/>
              <Drawer.Screen name="CustomerServiceTask" component={CSTabScreen}/>
            </Drawer.Navigator>
        )
        :
        <RootStackScreen/>
      }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}


export default App;