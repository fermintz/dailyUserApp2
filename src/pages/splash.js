import React, {useState} from 'react';
import {View, StyleSheet, Image, Animated} from 'react-native';
import {useEffect} from 'react/cjs/react.development';
import styled from 'styled-components';

const SplashView = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ImageView = styled(Image)`
  position: absolute;
  top:250px;
  width:70px;
  height:133px;
`

export default function Splash(props) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const viewColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(12,160,226,1)', 'rgba(12,160,226,1)'],
  });

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      props.navigation.navigate('Login');
    });
  }, [animation]);

  return (
    <SplashView style={{backgroundColor:viewColor}}>
      <ImageView
        source={require('../assets/img/logo-w.png')}
        resizeMode={'contain'}
      />
    </SplashView>
  );
}
