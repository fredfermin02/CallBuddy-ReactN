
import { View, StyleSheet, SafeAreaView, Text, Pressable, FlatList, useWindowDimensions } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

import { Video, ResizeMode,  } from "expo-av";
import Colors from '../../../Utils/Colors';



const dummyData = 
[
    {
    id:'1',
    video: require('../../../../assets/videoFeed/video1.mp4'),
    caption:"Tamo activo"
    },
    {
        id:'2',
        video: require('../../../../assets/videoFeed/video1.mp4'),
        caption:"Video"
    },
    {
        id:'3',
        video: require('../../../../assets/videoFeed/video1.mp4'),
        caption:"de Cesar"
    },
    {
        id:'4',
        video: require('../../../../assets/videoFeed/video1.mp4'),
        caption:"Prueba"
    }
]


export default function VideoComponent() {
    const video = useRef(null);
    const [status, setStatus] = useState(null);
    const isPlaying = status?.isLoaded && status.isPlaying;
    const {height} = useWindowDimensions()
    // GOES IN FEEDSCREEN
    const [activePostID, setActivePostID] = useState(dummyData[0].id)
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        const fetchPosts = async () => {
            // Fetch post here from server
            setPosts(dummyData)
        }
        fetchPosts()
    },[])

    const viewabilityConfigCallbackPairs = useRef([
        {
            viewabilityConfig: {itemVisiblePercentThreshold:50}, 
            onViewableItemsChanged:({changed, viewableItems})=>{
            if (viewableItems.length > 0 && viewableItems[0].isViewable) {
                setActivePostID(viewableItems[0].item.id)
            }
        },
    },
]);

    const onEndReached = ()=> {
        //Fetch more posts from server
        setPosts((currenPosts)=>[...currenPosts,...dummyData])
    }
    
    useEffect(()=>{
        if (!video.current) {
            return;
        }
        if (activePostID!=posts.id) {
            video.current.pauseAsync();
        }
        if (activePostID==posts.id) {
            video.current.playAsync();
        }
    },[activePostID,video.current])

    return (
        
        <FlatList data={posts}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            onEndReached={onEndReached}
            onEndReachedThreshold={1}

            keyExtractor={(item, index) => `${item.id}-${index}`}

            renderItem={({item})=> 

        <View style={[styles.container, {height:height-78}]}>
          <Video  style={StyleSheet.absoluteFill} 
                  source={item.video}
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
                <Text style={styles.caption}>{item.caption}</Text>
              </View>
              
    
              <View style={styles.rightColumn}>
              <Ionicons name="heart-outline" size={30} color="white" />
              <Ionicons name="share-social-sharp" size={30} color="white" />
              </View>
            </View>
        </SafeAreaView>
      </Pressable>
    </View>
      }/>
    
    
      )

}


const styles = StyleSheet.create({
    container:{
    //   flex:1
    },
    rightColumn:{
      gap:10
    },
    content:{
      flex:1,
    //   backgroundColor: 'rgba(0,0,0,0.5)',
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