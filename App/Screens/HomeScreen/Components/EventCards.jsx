import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors'

import { Ionicons } from '@expo/vector-icons';

export default function EventCards() {
  return (
    <View>
      <View style={styles.cardBackground}>
        <Image style={styles.imageStyle} source={require('../../../../assets/TrendingCarrousell/FootBall.png')}></Image>
        <Text style={styles.title}>FootBall</Text>
        
        <View style={styles.textAndIconContainer}>

            <Ionicons name="time-outline" size={24} color="black" />
            <Text style={styles.subTitle}>1:00 AM</Text>
        
        </View>
        
        <View style={styles.textAndIconContainer}>

            <Ionicons name="calendar-outline" size={24} color="black" />
            <Text style={styles.subTitle}>November 17, 2023</Text>
        
        </View>
        
        <View style={styles.textAndIconContainer}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.subTitle}>Regional Event Eenter</Text>
        </View>

        <View style={styles.textAndIconContainer}>
            <Ionicons name="shield-outline" size={24} color="black" />
            <Text style={styles.subTitle}>VS. Minot State</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardBackground:{
        backgroundColor: Colors.SecondaryGold,
        height:340,
        width:350,
        borderRadius:10,
        alignSelf:"center"
    },
    title:{
        fontFamily:'TitilliumWeb-Black',
        
        fontSize:25,
        marginHorizontal:5,
        color: Colors.BLACK
    },
    subTitle:{
        fontFamily:'TitilliumWeb',
        fontSize:15,
        marginHorizontal:3,
        color: Colors.WHITE
    },
    imageStyle:{
        height:200,
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    textAndIconContainer:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        marginHorizontal:5
    }
})