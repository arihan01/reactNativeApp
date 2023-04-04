import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'

const FourthStack = createNativeStackNavigator();


const Four = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello from Random</Text>
        </View>
    )
}

const FourthScreen = ({navigation}) => {
    return (
    <FourthStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#c4fbac'
        },
        headerTintColor: '#586e50',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    }}>
        <FourthStack.Screen name="Random" component={Four} options={{title:"Random", 
            headerLeft: () => (
                <Icon.Button name='ios-menu' size={25} 
                    backgroundColor='#c4fbac' color='#586e50'
                    onPress={() => navigation.openDrawer()}></Icon.Button>
                    )}}/>
    </FourthStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default FourthScreen