import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { List } from 'react-native-paper';

const Activity = createNativeStackNavigator();

const ActivitiesScreen = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  
    return (
        <List.Section>
            <List.Subheader>Recent Activity</List.Subheader>
            <TouchableOpacity>
                <List.Item onPress title="Field Ticket Sent" left={() => <List.Icon icon="arrow-right-bottom" />} />
                <List.Item title="Field Ticket Saved" left={() => <List.Icon icon="arrow-right-bottom" />}/>
            </TouchableOpacity>
        </List.Section>
    )
}

const ActivityScreen = ({navigation}) => {
    return (
        <Activity.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <Activity.Screen name="Activity" component={ActivitiesScreen} options={{title:"Recent Activity", 
                headerLeft: () => (
                    <Icon.Button name='menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>
                )}}/>
        </Activity.Navigator>
    )
}

export default ActivityScreen
