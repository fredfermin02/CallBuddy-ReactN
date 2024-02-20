import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll=false}) {
  return (
    <View style={styles.categoriesContainer} >
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && <Text>View All</Text> }
    </View>
    
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontFamily:'TitilliumWeb',
        marginBottom:10
    },
    categoriesContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:10
    }
})