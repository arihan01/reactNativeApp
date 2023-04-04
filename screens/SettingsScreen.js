import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List, MD3Colors } from 'react-native-paper';


const SettingsScreen = ({navigation}) => {

    return (
        <List.Section>
            <TouchableOpacity>
                <List.Item onPress title="First Item" left={() => <List.Icon icon="equal" />} />
            </TouchableOpacity>
            <List.Item
            title="Second Item"
            left={() => <List.Icon icon="calendar" />}
            />
        </List.Section>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default SettingsScreen