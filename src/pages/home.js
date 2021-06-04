import React,{useState} from 'react';
import {View, Text, TouchableOpacity,ScrollView ,TextInput} from 'react-native';
import Theme from '../assets/theme';
import NoticeModal from '../components/modal/Notice'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components'

export default function Home(props) {

  const [modalVisible, setModalVisible] = useState(false)
  

  return (
    <View style={{flex: 1,backgroundColor:'#fff'}}>
      <View
        style={{paddingVertical:15,paddingHorizontal:26,}}
      >
        <TouchableOpacity
          style={{
            height:50,
            backgroundColor:'#f2f2f2',
            borderRadius:25,
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:20,
            justifyContent:'space-between'
          }}
        >
          <View style={{flex:1,}}>
            <Text>
              선택해라!
            </Text>
          </View>
          <Icon name="chevron-down-outline" size={20} style={{marginLeft:10,}}/>
        </TouchableOpacity>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{
            zIndex:3,
            width:'100%',
            position:'absolute',
            backgroundColor:'#fff',
            top:15,
            left:26,
            padding:26,
            borderRadius:25,
            borderWidth:1,
            borderColor:'#e2e2e2',
            maxHeight:300,
            opacity:0,
          }}
        >
          <TouchableOpacity>
            <Text>주소</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView>
        <NoticeModal 
          visible={modalVisible} 
          dismiss={()=>setModalVisible(false)}
        />
          <TouchableOpacity
            onPress={()=> props.navigation.navigate('Order')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              elevation:4,
            }}>
              <Text>주문하기</Text>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>setModalVisible(true)}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            marginTop:30,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>알림</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
