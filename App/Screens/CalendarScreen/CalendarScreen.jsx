import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { CalendarProvider} from "react-native-calendars";
import Colors from '../../Utils/Colors';
import Agenda from './Components/AgendaComponent';

import { Ionicons } from '@expo/vector-icons';
import NewEventModal from './Components/NewEventModal';

const currentDate = new Date().toDateString();

export default function CalendarScreen() {
  
const [showModal, setShowModal] = useState(false);
  return (


< >
    <CalendarProvider style={{paddingTop:90}}  date='2024-02-20'>
      <View style={{position:"absolute", width:'100%', height:90,backgroundColor:Colors.SecondaryGold}}>
      {/* Grey baackground for modal */}
      {showModal && (
        <View style={{ position: "absolute", width: '100%', height: 90, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        </View>
      )}
        <View style={{marginHorizontal:10,display:'flex', flexDirection:'row', top:60, alignContent:'center',justifyContent:'space-between'}}>
          
          <View>
            <Text style={{fontFamily:'TitilliumWeb', fontSize:'20'}}>{currentDate}</Text>
          </View>
          
          <View>
            <TouchableOpacity onPress={()=>setShowModal(true)}>
              <Ionicons style={{}} name="add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
        
        </View>
      
      </View>
        
      

      <Agenda />

    </CalendarProvider>

    <Modal animationType='slide'
          visible={showModal}
          transparent
          
      >
      <NewEventModal hideModal={()=>setShowModal(false)}></NewEventModal>
    </Modal>
</>



    
   
  )
}

