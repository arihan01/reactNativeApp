import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {TextInput, Button} from 'react-native-paper'

const NewLeadScreen = ({navigation}) => {
    return (
        <View style={{flex:1}} backgroundColor='white'>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder='Lead'/>
                <TextInput style={styles.textDesc} placeholder='Description'/>
            </View>
            
            <View style={styles.buttons}>
                <Button mode="contained" buttonColor='#c4fbac' textColor='black' style={{width:300}}>Create</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    textInput: {
        width:300,
        height: 45,
        marginTop:45,
        marginLeft:35,
        backgroundColor: 'white'
    },
    textDesc: {
        width:300,
        height: 65,
        marginTop:95,
        marginLeft:35,
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


export default NewLeadScreen
