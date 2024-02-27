
import React from 'react'
import Header from './Components/Header';
import { View,ScrollView } from 'react-native';
import Heading from '../../Components/Headings';

import TrendingEventsCarousell from './Components/TrendingEventsCarousell';
import CategoriesCarousell from './Components/CategoriesCarousell';
import EventCards from './Components/EventCards';

            
export default function HomeScreen() {
    // const events = [
    //     { title: 'Football', image:require('../../../assets/TrendingCarrousell/Football.png') },
    //     { title: 'Grocery Bingo', image: require('../../../assets/TrendingCarrousell/GroceryBingo.png') },
    //     { title: 'Mustang Market', image:require('../../../assets/TrendingCarrousell/MustangMarket.png') }
    // ];
    return(
        
        <ScrollView >
            <Header/>
            
            <Heading  text={'Trending events'}/>

            <View >
                <TrendingEventsCarousell />
            </View>
            
            

            <View style={{marginVertical:10}}>
                <CategoriesCarousell />
            </View>

            <Heading text={'Coming Up'} isViewAll={true}/>

            <View style={{marginVertical:8}}>
            <EventCards></EventCards>
            </View>

            <View style={{marginVertical:8}}>
            <EventCards></EventCards>
            </View>

            <View style={{marginVertical:8}}>
            <EventCards></EventCards>
            </View>
            
        </ScrollView>
    )
}


