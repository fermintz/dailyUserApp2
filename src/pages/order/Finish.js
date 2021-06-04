import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, TextInput ,Image} from 'react-native'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../../assets/theme'

const FinishBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height:50px;
  border-radius:5px;
  background:#f2f2f2;
  margin-bottom:10px;
`

const InfoText = styled.Text`
  font-size:12px;
  margin-bottom:4px;
  color:#888;
`

export default function OrderFinsh(props){
  return(
    <View style={{padding:26,backgroundColor:'#fff',flex:1,}}>
      <View style={{justifyContent:'center',alignItems:'center',marginVertical:40,}}>
        <View style={{width:160,height:160,backgroundColor:'#f2f2f2',borderRadius:100,}}>
          <Image source={require('../../assets/img/orderFinish.png')} resizeMode={'contain'} style={{width:160,height:160}}/>
        </View>
        <Text style={{fontSize:24,marginTop:26,}}>예약이 완료되었습니다</Text>
        <Text style={{fontSize:14,color:'#888',marginTop:10,}}>기사님이 방문하는 날에 맞춰 세탁물을</Text>
        <Text style={{fontSize:14,color:'#888'}}>문앞에 내놓아주세요</Text>
      </View>

      <FinishBtn 
        style={{backgroundColor:'#F1F5F9'}}
        onPress={()=> props.navigation.navigate('Home')}
      >
        <Text>메인으로 돌아가기</Text>
      </FinishBtn>
      <FinishBtn>
        <Text>이용내역 확인하기</Text>
      </FinishBtn>

      <View style={{
        height:1,
        backgroundColor:'#e2e2e2',
        marginVertical:20
      }}/>

      <InfoText style={{color:'#F11064'}}>예약시간 2시간 전까지 취소가 가능합니다 </InfoText>
      <InfoText>이후에는 취소 수수료 3,000원이 발생합니다. </InfoText>
      <InfoText>취소는 [이용내역] > [상세보기] 페이지에서 취소할 수 있습니다.</InfoText>
     
    </View>
  )
}