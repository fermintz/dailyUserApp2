import React from 'react'
import { View,Text, FlatList } from 'react-native'
import Theme from '../assets/theme'
import styled from 'styled-components'

const CouponItem = styled.View`
  border:1px solid #e2e2e2;
  padding:15px;
  border-radius:5px;

`

export default function MyCoupon(){

  const couponData = [
    {
      name:'새해 명절 쿠폰',
      sale:3000,
      finishDate: '2021.09.20',
      minPrice: 15000,
    },
    {
      name:'환절기 세탁할인 쿠폰',
      sale:5000,
      finishDate: '2021.10.20',
      minPrice: 15000,
    }
  ]

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{paddingHorizontal:26}}>
        <Text style={{fontSize:24}}>쿠폰으로 더 저렴하게</Text>
        <Text style={{fontSize:24}}>이용하세요!</Text>
      </View>
      <FlatList
        contentContainerStyle={{
          padding:26,
          
        }}
        data={couponData}
        renderItem={({item,index}) => (
          <CouponItem>
            <Text><Text style={{fontSize:24,fontWeight:'bold',color:'#0CA0E2'}}>{item.sale}</Text> 원</Text>
            <Text style={{marginTop:5,}}>{item.name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15,}}>
              <Text style={{fontSize:12}}>{item.finishDate} 만료</Text>
              <Text style={{fontSize:12,}}><Text style={{color:'#888'}}>최소주문금액:</Text> {item.minPrice}원</Text>
            </View>
          </CouponItem>
        )}
        keyExtractor={item => item.index}
        ItemSeparatorComponent={()=>(
          <View style={{height:15,}} />
        )}
      />
    </View>
  )
}