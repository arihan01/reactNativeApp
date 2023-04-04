import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {TextInput, Button} from 'react-native-paper'

const NewFTScreens = ({navigation}) => {
    return (
        <View style={{flex:1}} backgroundColor='white'>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder='FT Number'/>
                <TextInput style={styles.textInput} placeholder='Date'/>
            </View>
            
            <View style={styles.buttons}>
                <Button mode="contained" buttonColor='#c4fbac' textColor='black' style={{width:150}}>Save</Button>
                <Button mode="contained" buttonColor='#c4fbac' textColor='black' style={{width:150}}>Send</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    textInput: {
        width:150,
        height: 45,
        marginTop:45,
        backgroundColor: 'white'
    },
    buttons: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        position:'absolute',
        bottom:50,
    }
    // },
    // date: {
    //     width:150,
    //     height: 45,
    //     marginTop: 45,
    //     marginRight: 10,
    //     backgroundColor: 'white'
    // }
})


export default NewFTScreens
