import { View, StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

import { Video, ResizeMode,  } from "expo-av";
import Colors from '../../Utils/Colors';

const post = {
  id:'1',
  video: require('../../../assets/videoFeed/video1.mp4'),
  caption:"Tamo activo"
}

export default function FeedScreen() {
  const video = useRef(null);
  const [status, setStatus] = useState(null);
  const isPlaying = status?.isLoaded && status.isPlaying;


  
  

  return (
    <View style={styles.container}>
      <Video  style={StyleSheet.absoluteFill} 
              source={post.video}
              resizeMode={ResizeMode.COVER}
              ref={video}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}/>
<Pressable onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          } style={styles.content}>
    {!isPlaying&&(<Ionicons style={{position:'absolute', alignSelf:'center', top:'50%'}} name="play" size={80} color="rgba(255,255,255,0.6)" />)}
    <SafeAreaView style={{flex:1}}>
      
        <View style={styles.footer}>
          <View style={styles.leftColumn}>
            <Text style={styles.caption}>{post.caption}</Text>
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
  container:{
    flex:1
  },
  rightColumn:{
    gap:10
  },
  content:{
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    fontSize:40,
    color:Colors.WHITE
  }

})