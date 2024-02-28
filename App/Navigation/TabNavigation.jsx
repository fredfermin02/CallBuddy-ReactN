import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import CalendarScreen from '../Screens/CalendarScreen/CalendarScreen';
import FeedScreen from '../Screens/FeedScreen/FeedScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.SecondaryGold,
        tabBarStyle:{backgroundColor:Colors.PrimaryBrown}
        }}>

      <Tab.Screen name="Home" component={HomeScreen} options={{
                            tabBarLabel:({color})=>(
                              <Text style={{color:Colors.TertiaryRust,fontSize:12, marginTop:-7}}>Home</Text>
                            ),
                            tabBarIcon:({color, size})=>(
                              <FontAwesome name="home" size={size} color={color} />
                            )
                          }} />

      <Tab.Screen name="Feed" component={FeedScreen} options={{
                      tabBarLabel:({color})=>(
                        <Text style={{color:Colors.TertiaryRust,fontSize:12, marginTop:-7}}>Live</Text>
                      ),
                      tabBarIcon:({color, size})=>(
                        <FontAwesome name="play" size={size} color={color} />
                      )
                    }} />
      
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{
                      tabBarLabel:({color})=>(
                        <Text style={{color:Colors.TertiaryRust, fontSize:12, marginTop:-7}}>Calendar</Text>
                      ),
                      tabBarIcon:({color, size})=>(
                        <FontAwesome name="calendar" size={size} color={color} />
                      )
                    }} />
    </Tab.Navigator>
  )
}