import React from 'react';
import {View, Text} from 'react-native';
import Theme from '../../assets/theme';

export default function UnderwayOrder(){
  return(
    <View style={Theme.layout.base}>
      <Text>진행중인 주문</Text>
    </View>
  )
}