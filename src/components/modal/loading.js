import React from 'react'
import { View,Text } from 'react-native'
import Modal from 'react-native-modal'
import Video from 'react-native-video'

export default function LoadingModal(props){
  const video = require('../../assets/video/car.mp4')
  const {visible, hidden} = props

  const LoadingFinish = () => {
    setTimeout(hidden, 3000)
  }
  return(
    <Modal
      isVisible={visible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={hidden}
      onModalShow={LoadingFinish}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{width:240,height:240,borderRadius:200,overflow:'hidden'}}>
          <Video 
            source={video}
            style={{width:240,height:240}}
            resizeMode={'contain'}
            repeat={true}
          />
        </View>
        <Text style={{color:'#fff',marginTop:30,fontSize:18}}>
          고객님집과 가까운 세탁소를
        </Text>
        <Text style={{color:'#fff',fontSize:18}}>
          검색중입니다
        </Text>
      </View>
    </Modal>
  )
}