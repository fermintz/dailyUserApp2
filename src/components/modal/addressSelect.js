import React from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

export default function AddressSelect(props){

  const addressData = [
    {
      name:'우리집',
      address:'부산광역시 북구 구남언덕로 15 3층'
    },
    {
      name:'회사',
      address:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호'
    },
  ]

  const {visible, hidden} = props

  return(
    <Modal
      isVisible={visible}
      onBackdropPress={hidden}
      animationOut={'fadeOutDown'}
      onBackButtonPress={hidden}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <View
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#aaa',
          padding:20,
          borderRadius:10,
          maxHeight:'80%',
        }}
      >
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20,}}>
          <Text style={{fontSize:18}}>주소선택</Text>
          <TouchableOpacity onPress={hidden}>
            <Icon name="close" size={24}/>
          </TouchableOpacity>
        </View>
        <FlatList 
          data={addressData}
          renderItem={({item, index})=>(
            <TouchableOpacity
              onPress={hidden}
            >      
              <Text>{item.name}</Text>
              <Text style={{fontSize:12,color:'#888',marginTop:5,}}>{item.address}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.index}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={()=>(
            <Divider />
          )}
        />
        <View
          style={{ marginTop:30,justifyContent:'center',alignItems:'center'}}
        >
          <TouchableOpacity
            style={{
              width:50,
              height:50,
              backgroundColor:'#d2d2d2',
              justifyContent:'center',
              alignItems:'center',
              borderRadius:100,
            }}
            onPress={()=> {
              props.navigation.navigate('AddressRecord')
            }}
          >
            <Icon name="add" size={24} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}



const Divider = styled.View`
  height:1px;
  background-color:#e2e2e2;
  margin:20px 0;
`
