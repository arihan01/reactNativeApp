import React from 'react'
import { View, StyleSheet, Image, Colors} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';
import {AuthContext} from '../components/context'

const DrawerContent = (props) => {

    const { signOut } = React.useContext(AuthContext)

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Image source={require("../assets/TinosysLogo.png")} style={{width:140,height:140}}/>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="home-outline" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Home"
                        onPress={()=>{props.navigation.navigate('Home')}}/>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="chart-areaspline" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Sales"
                        onPress={()=>{props.navigation.navigate('Sale')}}/>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="bullhorn" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Marketing"
                        onPress={()=>{props.navigation.navigate('Market')}}/>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="wrench" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Field Service"
                        onPress={()=>{props.navigation.navigate('FT')}}/>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="finance" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Finance"
                        onPress={()=>{props.navigation.navigate('Finance')}}/>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="monitor-shimmer" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Software"
                        onPress={()=>{props.navigation.navigate('Stack')}}/>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="headset" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Customer Service"
                        onPress={()=>{props.navigation.navigate('CustomerServiceTask')}}/>
                        <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="camera" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Upload"
                        onPress={()=>{props.navigation.navigate('Upload')}}/>
                        {/* <DrawerItem icon={({color, size}) =>(
                        <Icon 
                            name="fruit-grapes" 
                            color={color} 
                            size={size}/>
                        )}
                        label="Random"
                        onPress={()=>{props.navigation.navigate('Fourth')}}/> */}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({color, size}) =>(
                    <Icon name="exit-to-app" color={color} size={size}/>
                )}
                label="Sign Out"
                onPress={()=>{signOut()}}/>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 35,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default DrawerContent;