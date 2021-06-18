import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Theme from '../assets/theme';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #e2e2e2;
  margin: 20px 0;
`;

const NavBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 44px;
`;

const NavBtnText = styled.Text`
  font-size: 16px;
`;

const NewIcon = styled.Text`
  width: 16px;
  height: 16px;
  line-height: 16px;
  border-radius: 3px;
  text-align: center;
  background-color: #e25a00;
  color: #fff;
  font-size: 10px;
  margin-left: 5px;
`;

export default function Mypage(props) {
  return (
    <View style={{padding: 26, backgroundColor: '#fff', flex: 1}}>
      <Row style={{alignItems: 'flex-start', height: 100, marginVertical: 15}}>
        <View
          style={{flex: 1, justifyContent: 'space-between', height: '100%'}}>
          <View>
            <Text style={{fontSize: 24}}>
              <Text style={{color: '#0CA0E2'}}>어흥</Text> 님
            </Text>
            <Text style={{fontSize: 24}}>만나서 반가워요!</Text>
          </View>
          <Row>
            <Text style={{color: '#888'}}>010-8525-4561</Text>
            <TouchableOpacity
              onPress={()=> props.navigation.navigate('PhoneCheck')}
              style={{
                height: 22,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                paddingHorizontal: 15,
                borderRadius: 100,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12}}>변경</Text>
            </TouchableOpacity>
          </Row>
        </View>

        <View
          style={{
            width: 1,
            height: '100%',
            backgroundColor: '#e2e2e2',
            marginHorizontal: 26,
          }}
        />

        <TouchableOpacity
          style={{
            width: 70,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
          onPress={()=> props.navigation.navigate('MyCoupon')}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              width: 70,
              height: 70,
              backgroundColor: '#f2f2f2',
              textAlign: 'center',
              textAlignVertical: 'center',
              borderRadius: 100,
            }}>
            10
          </Text>
          <Text>나의쿠폰</Text>
        </TouchableOpacity>
      </Row>

      <Divider />

      <View>
        <NavBtn onPress={() => props.navigation.navigate('MyCredit')}>
          <NavBtnText>결제수단관리</NavBtnText>
        </NavBtn>
        <NavBtn onPress={() => props.navigation.navigate('MyAddress')}>
          <NavBtnText>수거/배달 장소관리</NavBtnText>
        </NavBtn>
        <NavBtn style={{marginBottom: 0}} onPress={() => props.navigation.navigate('MyInfo')}>
          <NavBtnText>나의정보관리</NavBtnText>
        </NavBtn>
      </View>

      <Divider />

      <View>
        <NavBtn style={{marginBottom: 0}} onPress={()=> props.navigation.navigate('Event')}>
          <NavBtnText>이벤트</NavBtnText>
        </NavBtn>
        <NavBtn style={{marginBottom: 0}} onPress={()=> props.navigation.navigate('HowTo')}>
          <NavBtnText>이용방법</NavBtnText>
        </NavBtn>
        <NavBtn>
          <NavBtnText>문의하기</NavBtnText>
        </NavBtn>
        <NavBtn style={{marginBottom: 0}} onPress={()=> props.navigation.navigate('Notice')}>
          <NavBtnText>공지사항</NavBtnText>
          <NewIcon>N</NewIcon>
        </NavBtn>
      </View>
    </View>
  );
}
