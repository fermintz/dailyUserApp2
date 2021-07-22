import React, {useState} from 'react'
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {WebView} from 'react-native-webview'
import UseCoupon from '../../components/modal/useCoupon'
import CardSelect from '../../components/modal/cardSelect'
import TermsModal from '../../components/modal/terms'

import styled from 'styled-components'

export default function OrderDetail(props){

  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {type, value} = JSON.parse(data);

    switch (type) {
      case 'route':
        props.navigation.navigate(value);
        break;
      case 'modal':
        setVisible(value);
        break;
      case 'termsModal':
        setTerms(value);
        break;
    }
  };

  const [visible, setVisible] = useState(false)
  const [cardSelect, setCardSelect] = useState(false)
  const [terms, setTerms] = useState(false)

  return(
    <>
      <UseCoupon 
        visible={visible}
        hidden={()=>setVisible(false)}
      />
      <CardSelect 
        visible={cardSelect}
        hidden={()=>setCardSelect(false)}
      />
      <TermsModal 
        visible={terms}
        hidden={()=>setTerms(false)}
      />
      <WebView
        onMessage={handleOnMessage}
        showsVerticalScrollIndicator={false}
        source={{uri:'http://192.168.0.25:8080/orderDetail'}}
      />
      <FinishBtn
        onPress={()=> setCardSelect(true)}
        underlayColor={'#0D8EC8'}
      >
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:16,}}>결제하기</Text>
          <Icon name="arrow-right" style={{marginLeft:10,color:'#fff'}} size={18}></Icon>
        </View>
      </FinishBtn>
    </>
  )
}

const FinishBtn = styled.TouchableHighlight`
  position:absolute;
  bottom:0px;
  height:56px;
  background:#0CA0E2;
  width:100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`