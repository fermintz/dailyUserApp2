import React,{useState} from 'react'
import {View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native'
import styled from 'styled-components'
import Theme from '../../assets/theme'
import Icon from 'react-native-vector-icons/Ionicons'

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`
const SelectItem = styled.TouchableOpacity`
  border:1px solid #e2e2e2;
  border-radius:5px;
  margin-top:10px;
  padding:15px;
`
export default function GateInput(props){

  const select = [
    {
      text:'비밀번호가 있어요!',
      input:true,
    },
    {
      text:'아무나 출입가능해요!',
      input:false,
    }
  ]

  const [selected, setSelected] = useState(0)


  return(
    <View style={Theme.layout.base}>
      <ScrollView>
      <View style={{marginBottom:20}}>
        <Text style={{fontSize:24}}>출입구에</Text>
        <Text style={{fontSize:24}}>비밀번호가 있나요?</Text>
      </View>

      {select.map((item,index) => (
        <SelectItem
          onPress={()=> setSelected(index)}
        >
          <Row>
            <Icon 
              name="checkmark-circle-outline" 
              size={24}
              style={{marginRight:5}} 
              color={selected === index ? '#0CA0E2' : '#aaa'}
            />
            <Text>{item.text}</Text>
          </Row>
          <View>
            {item.input && selected === index ? 
              <TextInput clearButtonMode={'always'}
                placeholder={'출입방법을 입력해주세요!'}
                multiline={true}
                style={{
                  backgroundColor:'#f2f2f2',
                  marginTop:10,
                  borderRadius:5,
                  paddingHorizontal:10,
                  minHeight:100,
                  textAlignVertical:'top'
                }}
              /> 
            : null} 
          </View>
        </SelectItem>
      ))}

      </ScrollView>

      <View style={{paddingBottom:15,}}>
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
          <Text style={{fontSize:16,color:'#0CA0E2'}}>등록하기</Text>
        </TouchableOpacity>
      </View>
      
     
    </View>
  )
}