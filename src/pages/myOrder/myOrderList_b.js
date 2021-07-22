import React,{useState} from 'react'
import {View, Text} from 'react-native'
import {WebView} from 'react-native-webview'


export default function MyOrderDetail(props){

  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {type, value} = JSON.parse(data);
    switch (type) {
      case 'route':
        props.navigation.navigate(value);
        break;
    }
  };
  return(
    <View style={{flex:1,}}>
      <WebView
        onMessage={handleOnMessage}
        showsVerticalScrollIndicator={false}
        source={{uri:'http://192.168.0.25:8080/myOrder'}}
      />
    </View>
  )
}