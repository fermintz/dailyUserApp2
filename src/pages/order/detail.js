import React, {useState} from 'react'
import {View} from 'react-native'
import {WebView} from 'react-native-webview'
import UseCoupon from '../../components/modal/useCoupon'

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
    }
  };

  const [visible, setVisible] = useState(false)

  return(
    <>
      <UseCoupon 
        visible={visible}
        hidden={()=>setVisible(false)}
      />
      <WebView
        onMessage={handleOnMessage}
        showsVerticalScrollIndicator={false}
        source={{uri:'http://192.168.0.25:8080/orderDetail'}}
      />
    </>
  )
}