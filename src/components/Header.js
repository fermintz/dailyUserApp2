import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components'

const HeaderView = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  height:70px;
  padding:0 26px;
  background-color:#fff;
  z-index:20;
`

export default function Header(props){
  const navigation = props.navigation

  return(
    <HeaderView>
      <TouchableOpacity
        onPress={()=> navigation.goBack()}
      >
        <Icon name="arrow-back-outline" size={24}/>
      </TouchableOpacity>
    </HeaderView>

  )
}