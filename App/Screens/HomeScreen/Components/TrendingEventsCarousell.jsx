import { View, Text, FlatList,Image } from 'react-native'

import React, { useState } from 'react'

export default function TrendingEventsCarousell({trendingEvents}) {
    // console.log(trendingEvents)
    const [images, setimages]  = useState([
        require('../../../../assets/TrendingCarrousell/FootBall.png') ,
        require( '../../../../assets/TrendingCarrousell/GroceryBingo.png'),
        require('../../../../assets/TrendingCarrousell/MustangMarket.png')
    ]);

    return (
        <View>
            <FlatList 
                horizontal={true}
                
                showsHorizontalScrollIndicator={false}
                data={images}
                renderItem={({ item }) => (
                    <View>
                        <Image 
                            source={item}
                            style={{
                                borderRadius:20 ,
                                width:288,
                                height:160,
                                marginHorizontal:8
                            }}
                        />
                </View>
            )}/>
        </View>
    );
}