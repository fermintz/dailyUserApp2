import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function myCredit(props){

  const CardData = [
    {
      cardName:'현대카드',
      LastNum:4564,
      cardCate:'개인'
    },
    {
      cardName:'삼성카드',
      LastNum:9014,
      cardCate:'법인'
    },
  ]

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{paddingHorizontal:26}}>
        <Text style={{fontSize:24}}>결제수단 관리</Text>
        <Text style={{fontSize:14,color:'#888',marginTop:5}}>결제에 사용하실 카드를 등록/관리할 수 있습니다</Text>
      </View>
      <FlatList 
        data={CardData}
        contentContainerStyle={{padding:26}}
        renderItem={({item})=>(
          <View style={{paddingHorizontal:15,borderWidth:1,borderColor:'#e2e2e2',borderRadius:5,flexDirection:'row',alignItems:'center',height:60,}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginRight:15}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>{item.cardName}</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:10,color:'#888'}}>
                  {item.cardCate}
                </Text>
                <Text style={{color:'#F11064'}}>
                  {item.LastNum}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{borderRadius:100,backgroundColor:'#e2e2e2',width:30,height:30,justifyContent:'center',alignItems:'center'}}
            >
              <Icon name="close-outline" size={20}/>
            </TouchableOpacity>
          
          </View>
        )}
        ItemSeparatorComponent={()=>(
          <View style={{height:10,}}></View>
        )}
        ListFooterComponentStyle={{
          marginTop:30,
        }}
        ListFooterComponent={()=>(
          <TouchableOpacity
            onPress={()=> props.navigation.navigate('CreditAdd')}
            style={{
              height:50,
              alignItems:'center',
              justifyContent:'center',
              borderWidth:1,
              borderColor:'#e2e2e2',
              flexDirection:'row',
              borderRadius:5,
            }}
          >
            <Icon name="add-circle-outline" size={20} color={'#0CA0E2'} style={{marginRight:5}}/>
            <Text>결제수단 추가하기</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}