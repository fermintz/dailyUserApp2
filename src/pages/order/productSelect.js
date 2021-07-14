import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import Progress from '../../components/modal/progress';
import BasketModal from '../../components/basket';

export default function Home(props) {
  const handleOnMessage = ({nativeEvent: {data}}) => {
    const {type, value} = JSON.parse(data);

    switch (type) {
      case 'route':
        props.navigation.navigate(value);
        break;
      case 'modal':
        setModalActive(value);
        break;
      case 'basket':
        setBasket(value);
        break;
    }
  };

  const [modalActive, setModalActive] = useState(true);
  const [basket, setBasket] = useState(false);

  return (
    <>
      <Progress 
        visible={modalActive}
        hidden={() => setModalActive(false)}
      />
      <BasketModal 
        visible={basket}
        hidden={() => setBasket(false)}
      />
      <WebView
        onMessage={handleOnMessage}
        showsVerticalScrollIndicator={false}
        source={{uri: 'http://192.168.0.25:8080/product'}}
        style={{zIndex:10,}}
      />
    </>
  );
}
