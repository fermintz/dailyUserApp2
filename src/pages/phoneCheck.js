import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Animated, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Theme from '../assets/theme';

const InputBox = styled(TextInput)`
  width: 100%;
  height: 46px;
  border: ${Theme.border.base};
  border-radius: 5px;
  background: #fff;
  padding: 0 10px;
`;

const InputBtn = styled(TouchableOpacity)`
  width: 46px;
  height: 46px;
  border-radius: 5px;
  border: ${Theme.border.base};
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const Message = styled(Text)`
  font-size: 24px;
  color:#292929;
`;

const Timer = styled(Text)`
  position: absolute;
  right: 15px;
  color: ${Theme.colors.pink};
`;

const FinishBtn = styled(View)`
  width:120px;
  height:46px;
  background-color:#fff;
  justify-content:center;
  align-items:center;
  border:${Theme.border.base};
  border-radius:100px;
`

export default function PhoneCheck(props) {
  const SlideUp = new Animated.Value(50);
  const FadeIn = new Animated.Value(0);

  const animationStart = () => {
    Animated.timing(SlideUp, {
      toValue: 0,
      delay: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(FadeIn, {
      toValue: 1,
      delay: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={Theme.layout.base}>
      <ScrollView>
      <View style={{marginBottom:24}}>
        <Message>회원님의 전화번호를 </Message>
        <Message>확인할게요</Message>
      </View>

      <View style={{flexDirection: 'row'}}>
        <InputBox
          style={{flex:1,}}
          placeholder={"전화번호 '-'제외 입력"}
          keyboardType={'number-pad'}
        />
        <InputBtn onPress={animationStart}>
          <Icon name="chevron-forward-outline" size={20} />
        </InputBtn>
      </View>

      <Animated.View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}
        top={SlideUp}
        opacity={FadeIn}
      >
        <InputBox
          placeholder={'인증번호 입력'}
          keyboardType={'number-pad'}
          style={{paddingRight: 46}}
        />
        <Timer>
          60
        </Timer>
      </Animated.View>

      </ScrollView>

      <Animated.View
        style={{paddingBottom:15,}}
        top={SlideUp}
        opacity={FadeIn}
      >
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
          onPress={()=>props.navigation.navigate('AddressRecord')}
        >
          <Text style={{fontSize:16,color:'#000'}}>인증완료</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
