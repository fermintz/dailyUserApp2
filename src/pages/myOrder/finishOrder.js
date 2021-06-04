import React from 'react';
import {View, Text} from 'react-native';
import Theme from '../../assets/theme';

export default function FinishOrder(){
  return(
    <View style={Theme.layout.base}>
      <Text>종료된 오더</Text>
    </View>
  )
}