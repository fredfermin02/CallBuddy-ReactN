import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import Colors from '../../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import {  } from "../../../../assets/HomeScreen/FrontPage_Header.jpg";

export default function Header() {
  return (
    <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                <Image style={styles.userImage}/>
            
                <View>
                    <Text style={{color:Colors.WHITE,fontFamily:'TitilliumWeb'}} >Welcome,</Text>
                    <Text style={{color:Colors.WHITE,
                    fontSize:20,fontFamily:'TitilliumWeb-Black'}}>Fulano</Text>
                </View>
                
            </View>
            <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        
        <View>
            <Image source={require('../../../../assets/HomeScreen/HeaderImage.png')} style={styles.backgroundImg}/>
            <Image source={require('../../../../assets/HomeScreen/SMSU_Logo.png')} style={styles.smsuLogo}/>
            <Text style={styles.smsuTitle}>{`SouthWest Minnesota \nState University`}</Text>
        </View>
        
        
        
        

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        backgroundColor:Colors.SecondaryGold,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    backgroundImg:{
        marginTop:10,
        height:200,
        width:'auto',
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        
    },
    smsuTitle:{
        position:'absolute',
        top:'60%',
        left:'30%',
        color:Colors.WHITE,
        fontFamily:'TitilliumWeb-Black',
        fontSize:'20%',
    },
    smsuLogo:{
        position:'absolute',
        top:'55%',
        left:'5%',
        height:80,
        width:80,
        zIndex:1
    },
    profileMainContainer:{
        paddingHorizontal:20,
        paddingVertical:7,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap: 10
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99,

    }
})