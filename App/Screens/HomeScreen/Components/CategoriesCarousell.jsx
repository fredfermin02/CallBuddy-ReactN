import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../Utils/Colors';

export default function CategoriesCarousell() {
    const [carousellIcons, setcarousellIcons ] = useState([{icon:'american-football',text:'Sports'},{icon:'people',text:'Clubs'},{icon:'barbell',text:'Facilities'}])
  return (
    <View>
        {/* <View style={{marginHorizontal:10, display:'flex',flexDirection:'row', justifyContent: 'space-between', // Spread items evenly along the row
        alignItems: 'center',}}>
            <View style={{marginHorizontal:8}}>
                <Ionicons name="american-football" size={40} color={Colors.SecondaryGold} />
                <Text style={{color:Colors.SecondaryGold}}>Hola</Text>
            </View>

            <View style={{marginHorizontal:8}}>
                <Ionicons name="american-football" size={40} color={Colors.SecondaryGold} />
                <Text style={{color:Colors.SecondaryGold}}>Hola</Text>
            </View>

            <View style={{marginHorizontal:8}}>
                <Ionicons name="american-football" size={40} color={Colors.SecondaryGold} />
                <Text style={{color:Colors.SecondaryGold}}>Hola</Text>
            </View>

            <View>
                <Ionicons name="american-football" size={40} color={Colors.SecondaryGold} />
                <Text style={{color:Colors.SecondaryGold}}>Hola</Text>
            </View>
        </View> */}


        <FlatList data={carousellIcons}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                  contentContainerStyle={{flex:1,justifyContent:'space-around',}}
                  renderItem={({item, index})=>(
                    
                        <View style={{alignItems:'center'}}>
                            <View>
                            <Ionicons name={item.icon} size={40} color={Colors.SecondaryGold} />
                            </View>
                            <View>
                            <Text style={{color:Colors.SecondaryGold, fontSize:13, fontFamily:'TitilliumWeb'}}>{item.text}</Text>
                            </View>
                        </View>
                    
                  )}>

        </FlatList>
        </View>

  )
}

const styles = StyleSheet.create({

})