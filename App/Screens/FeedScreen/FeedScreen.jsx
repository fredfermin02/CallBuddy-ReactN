import { View, StyleSheet, SafeAreaView,FlatList, Text, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { Ionicons } from '@expo/vector-icons';

import { Video, ResizeMode,  } from "expo-av";
import Colors from '../../Utils/Colors';

import  GolbalApi  from "../../Utils/GolbalApi";
import VideoComponent from './Components/VideoComponent';


export default function FeedScreen() {
  // const video = useRef(null);
  const [posts, setPosts]=useState([])
  useEffect(()=>{
    const getContent=()=>{
      GolbalApi.getContent().then(resp=>{
        setPosts(resp.feedContents)
      })
    }
      getContent();
  },[])

const [activePostID, setActivePostID] = useState(posts[0]?.id || '')
const viewabilityConfigCallbackPairs = useRef([
      {
          viewabilityConfig: {itemVisiblePercentThreshold:50}, 
          onViewableItemsChanged:({changed, viewableItems})=>{
          if (viewableItems.length > 0 && viewableItems[0].isViewable) {
              setActivePostID(viewableItems[0].item.id)
          }},
  },
]);

  const onEndReached = ()=> {
      //Fetch more posts from server
      setPosts((currenPosts)=>[...currenPosts,...posts])
  }
  
 



  return(
    <View style={styles.container}>
      <FlatList data={posts}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            onEndReached={onEndReached}
            onEndReachedThreshold={1}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => {
               // Log the item being rendered
              return <VideoComponent content={item} activePostID={activePostID}/>;
            }}
            />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.BLACK
  }
})