import React, {useState, useEffect} from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';


const LoginView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 30px;
`;
const AniView = styled(Animated.View)`
  position: absolute;
  bottom: 50px;
  width: 100%;
`;
const AniImage = styled(Animated.Image)`
  position: absolute;
  height: 133px;
`;

const LoginBtn = styled(View)`
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  height: 46px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const LoginBtnIcon = styled(Image)`
  height: 26px;
  width: 26px;
  margin-right: 10px;
`;

const LoginBtnLabel = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const H2 = styled(Text)`
  font-size: 24px;
  color: #292929;
`;

const H4 = styled(Text)`
  font-size: 14px;
  color: #898989;
`;



export default function Login(props) {
  const {navigation} = props;
  const LogoAni = new Animated.Value(250);
  const BottomAni = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(LogoAni, {
      toValue: 150,
      delay: 1000,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(BottomAni, {
      toValue: 1,
      delay: 1000,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });

  return (
    <LoginView>
      <AniImage
        width={50}
        top={LogoAni}
        source={require('../assets/img/logo-b.png')}
        resizeMode={'contain'}
      />
      <AniView opacity={BottomAni}>
        <View>
          <H2>지친일상에 휴식을 주는</H2>
          <H2>모바일 세탁소</H2>
        </View>
        <View style={{marginTop: 10, marginBottom: 20}}>
          <H4>집앞까지 수거/배달 편리한 세탁서비스</H4>
          <H4>지금만나보세요</H4>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('PhoneCheck')}>
          <LoginBtn>
            <LoginBtnLabel>
              <LoginBtnIcon source={require('../assets/img/kakao-login.png')} />
              <Text>카카오톡 로그인</Text>
            </LoginBtnLabel>
            <Icon name="chevron-forward-outline" />
          </LoginBtn>
        </TouchableOpacity>
        <TouchableOpacity>
          <LoginBtn>
            <LoginBtnLabel>
              <LoginBtnIcon source={require('../assets/img/apple-login.png')} />
              <Text>애플 로그인</Text>
            </LoginBtnLabel>
            <Icon name="chevron-forward-outline" />
          </LoginBtn>
        </TouchableOpacity>
      </AniView>
    </LoginView>
  );
}
