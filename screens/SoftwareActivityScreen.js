import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { List } from 'react-native-paper';
import NewOperatorsScreen from './NewOperatorsScreen';

const SoftwareStack = createNativeStackNavigator();


const Software = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  
    return (
        <List.Section>
            <List.Subheader>Recent Activity</List.Subheader>
            <TouchableOpacity>
                <List.Item onPress title="Deploy Scheduled" left={() => <List.Icon icon="arrow-right-bottom" />} />
                <List.Item title="Dpeloy Cancelled" left={() => <List.Icon icon="arrow-right-bottom" />}/>
            </TouchableOpacity>
        </List.Section>
    )
}

const SoftwareActivityScreen = ({navigation}) => {
    return (
        <SoftwareStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <SoftwareStack.Screen name="SoftwareActivity" component={Software} options={{title:"Software Activity", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>)}}/>
        </SoftwareStack.Navigator> 
    )
}

export default SoftwareActivityScreen