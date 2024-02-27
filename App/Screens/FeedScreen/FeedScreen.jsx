import { View, StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

import { Video, ResizeMode,  } from "expo-av";
import Colors from '../../Utils/Colors';
import VideoComponent from './Components/VideoComponent';

// const post = {
//   id:'1',
//   video: require('../../../assets/videoFeed/video1.mp4'),
//   caption:"Tamo activo"
// }

export default function FeedScreen() {
  // const video = useRef(null);
  // const [status, setStatus] = useState(null);
  // const isPlaying = status?.isLoaded && status.isPlaying;


  return(
    <View style={{flex:1}}>
    <VideoComponent/>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.BLACK
  }
})