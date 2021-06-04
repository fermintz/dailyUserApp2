import React from 'react'
import { View,Text, TextInput, TouchableOpacity} from 'react-native'
import Theme from '../assets/theme'
import styled from 'styled-components'
import { ScrollView } from 'react-native-gesture-handler'

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  height:60px;
  border-color: #e2e2e2;

`
const Col = styled.View`
  flex:1;
`
const Input = styled.TextInput`
  height:40px;
`
const Title = styled.Text`
  width:70px;
`
const Divider = styled.View`
  height:1px;
`

export default function MyInfo(props){

  return(
    <View style={Theme.layout.base}>
      <ScrollView>
        <View style={{marginBottom:26,}}>
          <Text style={{fontSize:24}}>어흥님의 정보를</Text>
          <Text style={{fontSize:24}}>변경할 수 있습니다</Text>
        </View>

        <Row style={{borderBottomWidth:1}}>
          <Title>전화</Title>
          <Row style={{flex:1,justifyContent:'space-between'}}>
            <Text>010-8525-4561</Text>
            <TouchableOpacity style={{
              justifyContent:'center',
              alignItems:'center',
              borderWidth:1,
              paddingHorizontal:10,
              borderRadius:100,
              height:22,
            }}
              onPress={()=>props.navigation.navigate('PhoneCheck')}
            >
              <Text style={{fontSize:12}}>변경</Text>
            </TouchableOpacity>
          </Row>
        </Row>
        <Row style={{borderBottomWidth:1}}>
          <Title>이름</Title>
          <Col>
            <Input value="어흥"/>
          </Col>
        </Row>
        <Row style={{borderBottomWidth:1}}>
          <Title>이메일</Title>
          <Col>
            <Input value="fermintz@naver.com"/>
          </Col>
        </Row>
        <View
          style={{
            alignItems:'flex-end',
            marginTop:30,
          }}
        >
          <TouchableOpacity
              style={{
                
              }}
            >
            <Text style={{textDecorationLine:'underline'}}>회원탈퇴</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
      
      
      

      <View style={{paddingBottom:26}}>
        <TouchableOpacity
          style={{
            height:50,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#fff',
            borderWidth:1,
            borderColor:'#e2e2e2',
            borderRadius:5,
            flexDirection:'row',
            paddingHorizontal:15,
          }}
          onPress={()=>props.navigation.navigate('Main')}
        >
          <Text style={{fontSize:16,color:'#0CA0E2'}}>변경완료</Text>
        </TouchableOpacity>
      </View>
     </View>
  )
}