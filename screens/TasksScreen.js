import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { List } from 'react-native-paper';

const Task = createNativeStackNavigator();

const TaskScreen = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  
    return (
      <List.Section title="Tasks">
        <List.Accordion
          title="Pending Tasks"
          left={props => <List.Icon {...props} icon="progress-clock" />}
          expanded={expanded}
          onPress={handlePress}
          >
          <List.Item title="Task 1" />
          <List.Item title="Task 2" />
        </List.Accordion>
  
        <List.Accordion
          title="Completed Tasks"
          left={props => <List.Icon {...props} icon="progress-check" />}>
          <List.Item title="Task 3" />
          <List.Item title="Task 4" />
        </List.Accordion>
        <List.Accordion
          title="Missed Tasks"
          left={props => <List.Icon {...props} icon="progress-close" />}>
          <List.Item title="Task 3" />
          <List.Item title="Task 4" />
        </List.Accordion>
      </List.Section>
    )
}

const TasksScreen = ({navigation}) => {
    return (
        <Task.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <Task.Screen name="Task" component={TaskScreen} options={{title:"Tasks", 
                headerLeft: () => (
                    <Icon.Button name='menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>
                )}}/>
        </Task.Navigator>
    )
}

export default TasksScreen
