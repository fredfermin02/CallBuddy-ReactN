
import React from 'react'
import Header from './Components/Header';
import { View,Text, Image, FlatList } from 'react-native';
import Heading from '../../Components/Headings';
import Colors from '../../Utils/Colors';
import TrendingEventsCarousell from './Components/TrendingEventsCarousell';


            
export default function HomeScreen() {
    const events = [
        { title: 'Football', image:'/Users/frederickfermin/Desktop/dev/callBuddy-ReactN/assets/TrendingCarrousell/FootBall.png' },
        { title: 'Grocery Bingo', image: '/Users/frederickfermin/Desktop/dev/callBuddy-ReactN/assets/TrendingCarrousell/GroceryBingo.png' },
        { title: 'Mustang Market', image:'/Users/frederickfermin/Desktop/dev/callBuddy-ReactN/assets/TrendingCarrousell/MustangMarket.png' }
    ];
    return(
        
        <View>
            <Header/>
            
            <Heading  text={'Trending events'}/>

            <View>
                <TrendingEventsCarousell trendingEvents={events}/>
            </View>
            
            
        </View>
    )
}


