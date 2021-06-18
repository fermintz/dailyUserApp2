import React, {useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../../assets/theme'

const CheckItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items:center;
  margin-bottom:10px;
`

const Divider = styled.View`
  height:1px;
  background:#e2e2e2;
  margin:20px 0;
`

const Input = styled.TextInput`
  background:#f2f2f2;
  border-radius:5px;
  padding:10px;
  margin-top:10px;
`

export default function UserAsk(props){

  const askData = [
    {
      active:false,
      text:'오염 제거요청(혈액/음식물/토사물/기타 등)',
    },
    {
      active:false,
      text:'수선 요청',
    },
    {
      active:false,
      text:'이염방지를 위한 별도세탁 요청',
    },
    {
      active:false,
      text:'가죽/스웨이드 등 특수세탁 요청',
    },
    {
      active:false,
      text:'명품 주의요청',
    }
  ]

  const [check, setCheck] = useState(askData)

  const changeCheck = (index) => {
    const base = [...check];
    base[index].active = !base[index].active
    setCheck(base)
  }


  return(
    <View style={Theme.layout.base}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:30,}}>
          <Text style={{fontSize: 20}}>세탁 요청사항이 있으신가요?</Text>
          <Text style={{color: '#898989', marginTop: 5}}>
            요청사항을 선택 및 내용을 입력해주세요
          </Text>
        </View>

        <View>
          <Text style={{marginBottom:15}}>세탁관련요청</Text>
          {
            check.map((item, index)=>{
              return(
                <CheckItem
                  onPress={()=> changeCheck(index)}
                >
                  <Icon name="checkmark-circle-outline"
                    size={24} 
                    style={{color: item.active ? Theme.colors.base : '#b2b2b2'}}
                  />
                  <Text style={{flex:1,marginLeft:10}}>{item.text}</Text>
                </CheckItem>
              )
            })
          }

          <Input
            placeholder={'세탁 요청사항을 입력해주세요'}
            multiline={true}
          />
        </View>

        <Divider />

        <View>
          <Text style={{marginBottom:15}}>배송관련요청</Text>
          <Input
            placeholder={'수거/배송 요청사항을 입력해주세요'}
            multiline={true}
          />
        </View>

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
          onPress={()=>props.navigation.navigate('OrderDetail')}
        >
          <Text style={{fontSize:16,color:'#000'}}>다음으로</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}