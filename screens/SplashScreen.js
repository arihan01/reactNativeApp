import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

const SplashScreen = ({navigation}) => {
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                animation="tada"
                duration={3000}
                source={require('../assets/TinosysLogo.png')} 
                style={styles.logo}/>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.title}>Welcome to Tinosys!</Text>
                <Text style={styles.text}>Please sign in to continue...</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <LinearGradient colors = {['#ecba72','#ecba72']} style={styles.signIn}>
                    <Text>Get Started </Text>
                    <Icons name="navigate-next" color="#c4fbac" size={20}/>
                </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const {height} = Dimensions.get("screen")
const height_logo = height * 0.28

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: "#fff"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#c4fbac',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#586e50',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#586e50',
        marginTop:8,
        fontWeight:'bold'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });


export default SplashScreen
