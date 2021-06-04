import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';


const HomeBottomWrap = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height:56px;
  padding:0 50px;
  background:#fff;
`

const TabButton = styled.TouchableOpacity`
  width:50px;
  height:50px;
  justify-content: center;
  align-items: center;
`

export default function HomeBottomTab(props){
  return(
    <HomeBottomWrap style={{borderTopWidth:1,borderColor:'#e2e2e2'}}>
      <View>
        <TabButton 
          onPress={()=>props.navigation.navigate('MyOrder')}
        >
          <Icon name={'reader-outline'} size={20}/>
        </TabButton>  
      </View>
      <View>
        <TabButton 
          onPress={()=>props.navigation.navigate('Home')}
        >
          <Icon name={'home-outline'} size={20}/>
        </TabButton>  
      </View>
      <View>
        <TabButton 
          onPress={()=>props.navigation.navigate('Mypage')}
        >
          <Icon name={'person-outline'} size={20}/>
        </TabButton>  
      </View>
    </HomeBottomWrap>
  )
}