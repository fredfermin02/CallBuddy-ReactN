
import { View, StyleSheet, SafeAreaView, Text, Pressable, FlatList, useWindowDimensions } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

import { Video, ResizeMode,  } from "expo-av";
import Colors from '../../../Utils/Colors';

import { LinearGradient } from "expo-linear-gradient";

export default function VideoComponent({content, activePostID}) {
    const video = useRef(null);
    const [status, setStatus] = useState(null);
    const isPlaying = status?.isLoaded && status.isPlaying;
    const {height} = useWindowDimensions()

     useEffect(()=>{
      if (!video.current) {
          return;
      }
      if (activePostID!=content.id) {
          video.current.pauseAsync();
      }
      if (activePostID==content.id) {
          video.current.playAsync();
      }
  },[activePostID,video.current])
    
  
  // GOES IN FEEDSCREEN
    
    return (
        
    
// 
        <View style={[styles.container, {height:height-78}]}>
          <Video  style={StyleSheet.absoluteFill} 
                  source={{uri:content.video.url}}
                  resizeMode={ResizeMode.COVER}
                  ref={video}
                  isLooping
                  onPlaybackStatusUpdate={status => setStatus(() => status)}
                  />
            
    <Pressable onPress={() =>status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={styles.content}>
        <LinearGradient colors={['transparent','#3a1807']}
                        style={[StyleSheet.absoluteFill, styles.overLay]}/>
        {!isPlaying&&(<Ionicons style={{position:'absolute', alignSelf:'center', top:'50%'}} name="play" size={80} color="rgba(255,255,255,0.6)" />)}
        <SafeAreaView style={{flex:1}}>
          
            <View style={styles.footer}>
              <View style={styles.leftColumn}>
                <Text style={styles.caption}>{content.caption}</Text>
                <Text style={styles.description}>{content.description}</Text>
              </View>
              
    
              <View style={styles.rightColumn}>
              <Ionicons name="heart-outline" size={30} color="white" />
              <Ionicons name="share-social-sharp" size={30} color="white" />
              </View>
            </View>
        </SafeAreaView>
      </Pressable>
    </View>
      
    
    
      )

}


const styles = StyleSheet.create({
    overLay:{
        top:'50%'
    },
    container:{
    //   flex:1
    },
    rightColumn:{
      gap:10
    },
    content:{
      flex:1,
      padding:10
    },
    footer:{
      marginTop:'auto',
      flexDirection:"row",
      alignItems:'flex-end'
    },
    leftColumn:{
      flex:1
    },
    rightColumn:{
      gap:10
    },
    caption:{
      fontSize:30,
      color:Colors.WHITE,
      fontFamily:'TitilliumWeb-Black'
    },
    description:{
        fontSize:20,
        color:Colors.WHITE,
        fontFamily:'TitilliumWeb'
      }
  
  })