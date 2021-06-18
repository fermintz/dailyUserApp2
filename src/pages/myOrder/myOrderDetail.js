import React,{useState} from 'react'
import {View, Text} from 'react-native'
import {WebView} from 'react-native-webview'
import MessageModal from '../../components/modal/message'
import AddPay from '../../components/modal/addPayment'

export default function MyOrderDetail(props){

  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {type, value} = JSON.parse(data);
    switch (type) {
      case 'route':
        props.navigation.navigate(value);
        break;
      case 'message':
        setMessage(value);
        break;
      case 'addPay':
        setAddPay(value);
        break;
    }
  };

  const [massage, setMessage] = useState(false)
  const [addPay, setAddPay] = useState(false)

  return(
    <View style={{flex:1,}}>
      <MessageModal visible={massage} hidden={()=>setMessage(false)} title={'주문을 취소하시겠습니까?'} subtitle={'수거출발후에는 취소가 어려울 수 있습니다'}/>
      <AddPay visible={addPay} hidden={()=>setAddPay(false)}/>
      <WebView
        onMessage={handleOnMessage}
        showsVerticalScrollIndicator={false}
        source={{uri:'http://192.168.0.25:8080/myOrderDetail'}}
      />
    </View>
  )
}