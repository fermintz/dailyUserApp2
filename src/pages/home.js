import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import HomeHeader from '../components/HomeHeader';
import AddPayment from '../components/modal/addPayment'

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
    }
  };

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <HomeHeader {...props} />
      <AddPayment
        visible={modalActive}
        hidden={() => setModalActive(false)}
      />
      <WebView
        onMessage={handleOnMessage}
        showsVerticalScrollIndicator={false}
        source={{uri: 'http://192.168.0.25:8080'}}
        style={{zIndex:10,}}
      />
    </>
  );
}
