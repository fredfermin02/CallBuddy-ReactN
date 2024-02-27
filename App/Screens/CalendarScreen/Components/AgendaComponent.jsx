import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { Agenda} from "react-native-calendars";
import Colors from '../../../Utils/Colors';

export default function AgendaComponent() {
  const [items, setItems] = useState({
    '2024-02-20': [{name:'Football', cookies:true}],
    '2024-02-21': [{name:'Dentist Appointment', cookies:false}],
  })
    const renderItems = (item)=>{
        return(
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
        </View>
        )
       }

       const textWhenEmptyData = ()=>{
        return(
        <View style={styles.noEventContainer}>
            <Text style={styles.noEventText}>No events for today</Text>
        </View>
        )
       }

  return (
    <Agenda 
        renderEmptyData={()=>{
        return (
            textWhenEmptyData()
        )
      }} 
        items={items} 
        renderItem={(item, firstItemInDay) => {
        return (
            renderItems(item)
        )
      }}
        
        theme={styles.agendaStyling}/>
  )
}

const styles = StyleSheet.create({
  agendaStyling:{
    selectedDayBackgroundColor: Colors.BLACK,
    selectedDayTextColor: Colors.WHITE,
    todayBackgroundColor:Colors.PrimaryBrown,
    todayTextColor: Colors.WHITE,
    dotColor: Colors.TertiaryRust,
    textSectionTitleColor: Colors.TertiaryRust,
    calendarBackground: Colors.SecondaryGold, 
    agendaKnobColor: Colors.PrimaryBrown,
    agendaDayTextColor: Colors.PrimaryBrown,
    agendaDayNumColor: Colors.TertiaryRust,
    textDayFontWeight: 'bold', 
    textDayHeaderFontWeight: 'bold'
  },
    itemContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginTop:15,
        marginHorizontal:10,
        backgroundColor:Colors.SecondaryGold
      },
    noEventText:{
        alignSelf:'center', 
        top:'50%', 
        fontFamily:'TitilliumWeb-Italic', 
        fontSize:30
    },
    noEventContainer:{
        height:'100%',
        backgroundColor:Colors.SecondaryGold
    }
})