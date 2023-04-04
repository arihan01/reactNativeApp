import React from 'react'
import { View, Text, Dimensions, StyleSheet, Platform,StatusBar, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { set } from 'react-native-reanimated'
import {AuthContext} from '../components/context'

var emailre = new RegExp("^(?:(?:(?:(?: )*(?:(?:(?:\\t| )*\\r\\n)?(?:\\t| )+))+(?: )*)|(?: )+)?(?:(?:(?:[-A-Za-z0-9!#$%&’*+/=?^_'{|}~]+(?:\\.[-A-Za-z0-9!#$%&’*+/=?^_'{|}~]+)*)|(?:\"(?:(?:(?:(?: )*(?:(?:[!#-Z^-~]|\\[|\\])|(?:\\\\(?:\\t|[ -~]))))+(?: )*)|(?: )+)\"))(?:@)(?:(?:(?:[A-Za-z0-9](?:[-A-Za-z0-9]{0,61}[A-Za-z0-9])?)(?:\\.[A-Za-z0-9](?:[-A-Za-z0-9]{0,61}[A-Za-z0-9])?)*)|(?:\\[(?:(?:(?:(?:(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5]))\\.){3}(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5]))))|(?:(?:(?: )*[!-Z^-~])*(?: )*)|(?:[Vv][0-9A-Fa-f]+\\.[-A-Za-z0-9._~!$&'()*+,;=:]+))\\])))(?:(?:(?:(?: )*(?:(?:(?:\\t| )*\\r\\n)?(?:\\t| )+))+(?: )*)|(?: )+)?$")
var phonere = new RegExp("^((\\+)|(00))[0-9]{6,14}$")

const SignInScreen = () => {

    const [data, setData] = React.useState({
        eop:'',
        password:'',
        checkInputChange: false,
        secureTextEntry: true,
    })

    const { signIn } = React.useContext(AuthContext)

    const textInputChange = (val) => {
        if (emailre.test(val) || phonere.test(val)) {
            setData({
                ...data,
                eop: val,
                checkInputChange:true
            })
        } else {
            setData({
                ...data,
                eop: val,
                checkInputChange:false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#c4fbac' barStyle='dark-content'/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email or Phone Number</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#586e50"
                        size={20}
                    />
                    <TextInput
                        placeholder="Enter your Email or Phone Number"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.checkInputChange ? 
                    <Animatable.View animation="fadeIn">
                    <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    /> 
                    </Animatable.View>
                    : null}
                </View>
                <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#586e50"
                        size={20}
                    />
                    <TextInput
                        secureTextEntry={data.secureTextEntry ? true : false}
                        placeholder="Password"
                        style={styles.textInput}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? 
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        /> :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => {signIn()}}>
                    <LinearGradient colors = {['#ecba72','#ecba72']} style={styles.signIn}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#c4fbac'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#586e50',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default SignInScreen
