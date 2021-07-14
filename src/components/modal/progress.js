import React from 'react'
import { View,Text,Image } from 'react-native'
import Modal from 'react-native-modal'

export default function LoadingModal(props){
  const {visible, hidden} = props

  const LoadingFinish = () => {
    setTimeout(hidden, 3000)
  }
  return(
    <Modal
      isVisible={visible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onModalShow={LoadingFinish}
      backdropOpacity={0}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{width:60,height:60,borderRadius:30,backgroundColor:'rgba(0,0,0,0.3)'}}>
          <Image source={require('../../assets/img/loading.gif')} style={{width:60,height:60}}/>
        </View>
      </View>
    </Modal>
  )
}