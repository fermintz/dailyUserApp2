import React,{useState} from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, FlatList, StyleSheet,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal'
import styled from 'styled-components'


export default function BasketModal(props){
  const {visible, hidden} = props

  return(
    <Modal
      isVisible={visible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={hidden}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      style={{overflow:'hidden',borderRadius:5,}}
    >
      <Terms>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,borderBottomWidth:1,borderColor:'#e2e2e2'}}>
          <Text style={{fontSize:16,marginLeft:15,}}>서비스정책</Text>
          <TouchableOpacity 
            style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}
            onPress={hidden}
          >
            <Icon name="close" size={20}/>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={{padding:20,paddingBottom:50}}>
          <Text>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Text>
        </ScrollView>
      </Terms>
    </Modal>
  )
}

const Terms = styled.View`
  background:#fff;
  border-radius: 5px;
  margin:50px 0;

`