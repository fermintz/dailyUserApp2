import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import {WebView, Linking} from 'react-native-webview'

export default function Event(){
  
  const onNavigation = navState => {
    console.log(navState.url)
  }

  return(
    <>
       <WebView 
        showsVerticalScrollIndicator={false}
        source={{uri: 'http://192.168.0.25/category/event'}}
        style={{zIndex:10,}}
        cacheEnabled={false}
        onNavigationStateChange={onNavigation}
      />
    </>
  )
}