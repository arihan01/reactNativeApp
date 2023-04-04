import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import SettingsScreen from './SettingsScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const Homey = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/TinosysLogo.png')}></Image>
            <Text style={{color:'grey'}}>Tinosys, INC.</Text>
            <Text style={{color:'grey'}}>Sugarland, Texas</Text>
        </View>
    )
}

const HomeScreen = ({navigation}) => {
    return (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#c4fbac'
        },
        headerTintColor: '#586e50',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={Homey} options={{title:"Overview", 
            headerLeft: () => (
                <Icon.Button name='menu' size={25} 
                    backgroundColor='#c4fbac' color='#586e50'
                    onPress={() => navigation.openDrawer()}></Icon.Button>
                    ),
            headerRight: () => (
                <Icon.Button name='cog' size={25}
                    backgroundColor='#c4fbac' color='#586e50'
                    onPress={() => navigation.navigate('Settings')}></Icon.Button>
            )
            }}/>
        <HomeStack.Screen name="Settings" component={SettingsScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    }
})

export default HomeScreen