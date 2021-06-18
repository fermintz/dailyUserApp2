import React from 'react'
import {View, Text} from 'react-native'
import {WebView} from 'react-native-webview'

export default function DeliveryInfo(){
  return(
    <WebView
      showsVerticalScrollIndicator={false}
      source={{uri:'http://192.168.0.25:8080/delivery-info'}}
    >

    </WebView>
  )
} 