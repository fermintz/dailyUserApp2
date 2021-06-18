import React from 'react'
import {View, Text} from 'react-native'
import WebView from 'react-native-webview'


export default function NoticeList(){
  return(
    <>
       <WebView 
        showsVerticalScrollIndicator={false}
        source={{uri: 'http://192.168.0.25/category/notice'}}
        style={{zIndex:10,}}
        cacheEnabled={false}
        
      />
    </>
  )
}