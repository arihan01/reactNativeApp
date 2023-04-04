import React from 'react'
import { View, Text, Image, StyleSheet, StatusBar} from 'react-native'
import { Agenda } from 'react-native-calendars';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import {TextInput, Button} from 'react-native-paper'

const FTStack = createNativeStackNavigator();

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const FT = () => {
    const [items, setItems] = React.useState({});

    const loadItems = (day) => {

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(10, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }

    

    return (
        <View style={styles.container}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-12-26'}
                refreshControl={null}
                showClosingKnob={true}
                refreshing={false}
            />
            <StatusBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
})

const FTScheduleScreen = ({navigation}) => {
    return (
        <FTStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#c4fbac'
            },
            headerTintColor: '#586e50',
            headerTitleStyle: {
                fontWeight:'bold'
            }
        }}>
            <FTStack.Screen name="FTSchedule" component={FT} options={{title:"Schedule", 
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} 
                        backgroundColor='#c4fbac' color='#586e50'
                        onPress={() => navigation.openDrawer()}></Icon.Button>)}}/>
        </FTStack.Navigator> 
    )
}

export default FTScheduleScreen