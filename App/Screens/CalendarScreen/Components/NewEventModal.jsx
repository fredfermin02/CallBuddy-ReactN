import { View, Text, KeyboardAvoidingView, Platform,TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../Utils/Colors';

import { Calendar} from "react-native-calendars";
import TimeSelector from './TimeSelectorForModalComponent';

export default function NewEventModal({hideModal}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    
    
    
    return (

    <KeyboardAvoidingView style={{marginTop:90,height:'100%', paddingHorizontal:10, backgroundColor:Colors.SecondaryGold,borderTopLeftRadius:20,borderTopRightRadius:20}}>
        <ScrollView>

            
        {/*Modal back button to retrn to callendar  */}
        <TouchableOpacity style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center', paddingHorizontal:10, paddingTop:10}}
                            onPress={()=>hideModal()}>
            <Ionicons name="arrow-back-outline" size={25} color="black" />
            <Text style={{fontSize:20, fontFamily:'TitilliumWeb'}}>Back to calendar</Text>
        </TouchableOpacity>

        {/* Calendar in Modal */}
        <Text style={styles.primaryHeading}>Choose a date</Text>
        <Calendar
            style={{borderRadius:10, padding:30}}
          theme={styles.calendarStyling}
          enableSwipeMonths={true}
        />
    
    {/* Title input */}
    <TextInput
    style={{marginVertical:15,backgroundColor:Colors.WHITE, borderRadius:10, height:40, padding: 10, width:'%'}}
        placeholder="Title"
      />

{/* <Switch
        trackColor={{false: '#767577', true: '#34C759'}}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
    {/* Start time time selector */}
      <TimeSelector text={'Start Time'}/>
      
      {/* End time time selector */}
      <View style={{marginTop:10}}>
        <TimeSelector text={'End Time'}/>
      </View>
      
    
       
      

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    calendarStyling:{
        todayBackgroundColor:Colors.PrimaryBrown,
        todayTextColor: Colors.WHITE,
        dotColor: Colors.TertiaryRust,
        textSectionTitleColor: Colors.TertiaryRust,
        textDayFontWeight: 'bold', 
        textDayHeaderFontWeight: 'bold'},
    primaryHeading:{
        fontSize:25,
        fontFamily:'TitilliumWeb-Black',
        marginBottom:10,
        color:Colors.PrimaryBrown
    },
    secondaryHeading:{
        fontSize:25,
        fontFamily:'TitilliumWeb',
        color:Colors.PrimaryBrown

    },
    verifyButton: {
        position: 'absolute',
        alignSelf: 'center',
        right: 0,
      },
})