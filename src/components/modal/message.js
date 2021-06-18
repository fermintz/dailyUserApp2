import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components'

export default function MessageModal(props){
  const {visible, hidden, title, subtitle} = props

  return(
    <Modal
      isVisible={visible}
      onBackdropPress={hidden}
      animationOut={'fadeOutDown'}
      onBackButtonPress={hidden}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <View style={{padding:20,backgroundColor:'#fff',borderRadius:10,}}>
        <Text style={{fontSize:18}}>{title}</Text>
        <Text style={{color:'#888',marginTop:5}}>{subtitle}</Text>
        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',marginTop:15}}>
          <Button onPress={hidden}>
            <Text>취소</Text>
          </Button>
          <Button onPress={hidden}>
            <Text style={{color:'#0CA0E2'}}>확인</Text>
          </Button>
        </View>
      </View>
    </Modal>
  )
}

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height:40px;
  padding:0 20px;
  background:#f8f8f8;
  border-radius:100px;
  margin-left:10px;
`