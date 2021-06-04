import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../../assets/theme';

const TimeSelectBtn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:18px;
  border:1px solid #e2e2e2;
  border-radius:5px;
  background:#fff;
`

const Divider = styled.View`
  height:1px;
  width:100%;
  background:#e2e2e2;
  margin:30px 0;
`

export default function TimeSelect(props) {

  return (
    <View style={Theme.layout.base}>
      <View style={{marginBottom:30,}}>
        <Text style={{fontSize: 20}}>선택하신 시간때에 찾아갈게요!</Text>
        <Text style={{color: '#898989', marginTop: 5}}>
          희망하시는 시간대를 선택해주세요
        </Text>
      </View>

      <TouchableOpacity style={{marginBottom:15}}  onPress={()=> props.navigation.navigate('Product')}>

        <TimeSelectBtn>
          <View>
            <Text style={{fontSize:18}}>오전</Text>
            <Text>08:00 ~ 12:00</Text>
          </View>
          <Icon name="arrow-forward-circle-outline" size={32} color={Theme.colors.base}></Icon>
        </TimeSelectBtn>

      </TouchableOpacity>

      <TouchableOpacity onPress={()=> props.navigation.navigate('Product')}>

        <TimeSelectBtn>
          <View>
            <Text style={{fontSize:18}}>오후</Text>
            <Text>13:00 ~ 18:00</Text>
          </View>
          <Icon name="arrow-forward-circle-outline" size={32} color={Theme.colors.base}></Icon>
        </TimeSelectBtn>

      </TouchableOpacity>

      <Divider />

      <View
        style={{flexDirection:'row',marginBottom:5}}
      >
        <Text style={{color:'#d22828',marginRight:10}}>*</Text>
        <Text style={{flex:1,fontSize:13,color:'#888'}}>선택하신 시간때에 반드시 세탁물을 문앞에 놓아주세요</Text>
      </View>
      <View
        style={{flexDirection:'row'}}
      >
        <Text style={{color:'#d22828',marginRight:10}}>*</Text>
        <Text style={{flex:1,fontSize:13,color:'#888'}}>해당시간때에 세탁물이 없을시 수거비용을 제외한 나머지 금액만 환불될 수 있습니다</Text>
      </View>
    </View>
  );
}
