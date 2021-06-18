import React, {useState} from 'react'
import {View, Text, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'

export default function UseCoupon(props){

  const {visible, hidden} = props

  const DATA = [
    {
      name:'새해 명절 세탁쿠폰',
      date:'2021.09.20',
      minPrice:15000,
      salePrice:3000,
    },
    {
      name:'환절기 세탁할인 쿠폰',
      date:'2021.09.15',
      minPrice:15000,
      salePrice:5000,
    }
  ]

  const [active, setActive] = useState(0)

  return(
    <Modal
      isVisible={visible}
      onBackdropPress={hidden}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <View style={{padding:20,borderRadius:10,backgroundColor:'#fff'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:18,marginBottom:20}}>나의 쿠폰</Text>
          <TouchableOpacity onPress={hidden}>
            <Icon name="close" size={24}/>
          </TouchableOpacity>
        </View>
      
        <FlatList
          data={DATA}
          renderItem={({item, index})=>(
            <TouchableOpacity
              style={{padding:15,borderWidth:1,borderRadius:10,borderColor:'#e2e2e2',backgroundColor:active === index ? '#FBEFF4' : '#fff' }}
              onPress={()=> setActive(index)}
            > 
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                  <Text style={{fontSize:24,fontWeight:'bold'}}>{item.salePrice} <Text style={{fontSize:16,fontWeight:'normal'}}>원</Text></Text>
                  <Text style={{marginTop:5}}>{item.name}</Text>
                </View>
                <Icon 
                  name="checkmark-circle-outline" 
                  size={28}
                  color={active === index ? '#F11064' : '#e2e2e2'}
                />
              </View>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20,}}>
                <Text style={{fontSize:12,color:'#888'}}>{item.date} 만료</Text>
                <Text style={{fontSize:12,color:'#888'}}>최소주문금액: {item.minPrice}</Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={()=>(<View style={{height:10,}}/>)}
          keyExtractor={item => item.index}
          ListEmptyComponent={()=>(
            <View style={{padding:20,backgroundColor:'#f2f2f2',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
              <Text>사용가능한 쿠폰이 없습니다</Text>
            </View>
          )}
        />
        <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
          <TouchableOpacity
            onPress={hidden}
            style={{height:45,borderRadius:100,width:150,justifyContent:'center',alignItems:'center',backgroundColor:'#F11064'}}
          >
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>선택완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}