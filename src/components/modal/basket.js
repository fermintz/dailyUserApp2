import React,{useState} from 'react'
import { View } from 'react-native'
import {WebView} from 'react-native-webview';
import Modal from 'react-native-modal'

export default function BasketModal(props){
  const {visible, hidden} = props

  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {type, value} = JSON.parse(data);
    switch (type) {
       case 'basket':
        props.visible = value
        break;
    }
  };


  return(
    <Modal
      isVisible={visible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={hidden}
      style={{padding:0,margin:0,marginTop:120,borderTopRightRadius:15,borderTopLeftRadius:15,overflow:'hidden'}}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <WebView
        onMessage={handleOnMessage}
        showsVerticalScrollIndicator={false}
        source={{uri: 'http://192.168.0.25:8080/basket'}}
        style={{zIndex:10}}
      />
    </Modal>
  )
}