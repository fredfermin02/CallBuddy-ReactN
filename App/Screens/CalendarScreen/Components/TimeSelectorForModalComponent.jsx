import { View, Text, TouchableOpacity, Platform, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../Utils/Colors';


export default function TimeSelector({text}) {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    // Give format to time returned from time picker
    function formatTime(date) {
        return date.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
      }
    //   Toggle time picker
    const toggleDatePicker=()=>{
        setShowPicker(!showPicker)
    }
    // Set time for IOS Device
    const confirmIOSDate = () =>{
        setDate(date);
        toggleDatePicker();
    }

    // Set time for andorid devices
    const onChange = ({type}, selectedDate)=>{
        if (type=="set") {
            const currentDate= selectedDate;
            setDate(currentDate);
            if (Platform.OS === "android") {
                toggleDatePicker();
                setDate(currentDate.getTime())
            }

        }else{
            toggleDatePicker()
        }
    }
    return (
    <View>

        {/* Start time title  */}
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginHorizontal:10}}>
        <View>
            <Text style={styles.secondaryHeading}>{text}</Text>
        </View>
        {/* And button to diplay time picker */}
        <View>
        {!showPicker && (
            <Pressable onPress={toggleDatePicker}>
                <View style={{backgroundColor:Colors.lightBrown,
                              borderRadius:10, 
                              paddingHorizontal:10}}>
                <Text style={styles.timeStyling}>{formatTime(date)}</Text>
                </View>
            </Pressable>)}
        </View>
    </View>
        
        
    {/* Time picker */}
      {showPicker&&(
        <View style={{backgroundColor:Colors.lightBrown,
            borderRadius:10}}>
      <DateTimePicker mode="time"
                      display='spinner'
                      value={date}
                      onChange={onChange}
                      style={styles.datePicker}></DateTimePicker>
                      </View>
)}

        {/* Confirm time button */}
        {showPicker&&Platform.OS==='ios'&&(
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.closeButton} onPress={confirmIOSDate}><Text style={{fontSize:20, fontFamily:'TitilliumWeb', padding:5, alignSelf:'center'}}>Close</Text></TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.confirmButton} onPress={confirmIOSDate}><Text style={{fontSize:20, fontFamily:'TitilliumWeb', padding:5, alignSelf:'center', color:Colors.lightBrown}}>Confirm</Text></TouchableOpacity>
                </View>
                
            </View>
        )}

    </View>
  )
}

const styles = StyleSheet.create({
    closeButton:{
        borderColor:Colors.PrimaryBrown,
        borderRadius:99,
        borderWidth:1,
        margin:10,
        alignSelf:'stretch'

    },
    confirmButton:{
        backgroundColor:Colors.PrimaryBrown,
        borderRadius:99,
        margin:10,
        alignSelf:'stretch'
    },
    secondaryHeading:{
        fontSize:25,
        fontFamily:'TitilliumWeb',
        color:Colors.PrimaryBrown,
        alignItems:'center',
    },
    timeStyling:{
        fontSize:25,
        fontFamily:'TitilliumWeb',
        color:Colors.PrimaryBrown,
        
    },
    datePicker:{
        height:120,
        marginTop:5,
        
        
    },
})