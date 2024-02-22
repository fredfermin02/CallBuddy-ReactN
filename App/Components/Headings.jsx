import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function Heading({text, isViewAll=false}) {
  return (
    <View style={styles.categoriesContainer} >
      <Text style={styles.heading}>{text}</Text>
      <TouchableOpacity>{isViewAll && <Text style={styles.viewAll}>View All</Text> }</TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontFamily:'TitilliumWeb-Black',
        marginBottom:10,
        color:Colors.SecondaryGold
    },
    categoriesContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:10
    },
    viewAll:{
      color:Colors.SecondaryGold,
      fontFamily:'TitilliumWeb-Italic'
    }
})