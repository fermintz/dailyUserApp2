import React from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../../assets/theme';
import styled from 'styled-components';

const Message = styled(Text)`
  font-size: 24px;
  color:#292929;
`;

const InputBox = styled(TextInput)`
  width: 100%;
  height: 46px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background: #fff;
  padding: 0 10px;
`;

const InputBtn = styled(TouchableOpacity)`
  width: 46px;
  height: 46px;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;


export default function AddressInput(props){
  return(
    <View style={Theme.layout.base}>
      <ScrollView>
        <View style={{marginBottom:24}}>
          <Message>세탁물 수거/배달을 위한</Message>
          <Message>주소를 등록해주세요</Message>
        </View>

        <InputBox placeholder={'장소별칭을 입력해주세요 (예: 우리집)'}/>
        <View style={{flexDirection:'row', marginVertical:10, }}>
          <InputBox style={{flex:1}} placeholder={'주소를 검색하세요!'}/>
          <InputBtn>
            <Icon name="search" size={20}></Icon>
          </InputBtn>
        </View>
        <InputBox placeholder={'상세주소를 입력해주세요'} fou/>

      </ScrollView>

      <View style={{paddingBottom:15,}}>
        <TouchableOpacity
          style={{
            height:50,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#fff',
            borderWidth:1,
            borderColor:'#e2e2e2',
            borderRadius:5,
            flexDirection:'row',
            paddingHorizontal:15,
          }}
          onPress={()=>props.navigation.navigate('GateInput')}
        >
          <Text style={{fontSize:16,color:'#000'}}>다음으로</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}