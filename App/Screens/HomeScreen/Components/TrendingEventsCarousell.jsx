import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'

export default function TrendingEventsCarousell({trendingEvents}) {
    return (
        <View>
            <FlatList
                data={trendingEvents}
                renderItem={({ item,index }) => (
                    <View>
                        <Text>{item.image}</Text>
                        <Image source={item.image} />
                    </View>
                )}
            />
        </View>
    );
}