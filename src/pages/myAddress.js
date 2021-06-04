import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components';
import Theme from '../assets/theme';
import Icon from 'react-native-vector-icons/Ionicons'

const Row = styled.View `
  flex-direction: row;
`
const Col = styled.View`
  flex:1;
`

export default function MyAddress(props){
  const AddressData = [
    // {
    //   placeName:'우리집',
    //   address:'부산시 북구 구남언덕로 15 3층',
    //   gateInfo:'종누르고 0113 입니다'
    // },
    // {
    //   placeName:'회사',
    //   address:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
    //   gateInfo:'누구나 출입가능'
    // },
  ]

  const [isActive, setIsActive] = useState(0)

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{
        paddingHorizontal:26,
      }}>
        <Text style={{fontSize:24}}>수거/배달 장소관리</Text>
        <Text style={{fontSize:14,color:'#888',marginTop:5}}>세탁을 이용하실 장소를 등록해주세요</Text>
      </View>
      <FlatList 
        data={AddressData}
        contentContainerStyle={{
          padding:26,
        }}
        renderItem={({item, index})=>(
          <TouchableOpacity 
            style={{padding:15,borderWidth:1,borderColor:'#e2e2e2',borderRadius:5}}
            onPress={()=> setIsActive(index)}
          >
            <Row>
              <Icon name="star" size={20} color={isActive === index ? '#05D945' : '#e2e2e2'}/>
              <Col style={{marginHorizontal:15,}}>
                <Text style={{fontSize:16,}}>{item.placeName}</Text>    
                <Text style={{fontSize:12,color:'#888',marginTop:5,}}>{item.address}</Text>    
              </Col>
              <TouchableOpacity
                style={{width:26,height:26,justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:3,}}
              >
                <Icon name="close-outline" size={16}/>
              </TouchableOpacity>
            </Row>

            <Row style={{backgroundColor:'#f2f2f2',padding:10,marginTop:15,borderRadius:5,}}>
              <Text style={{fontSize:12,marginRight:10,color:'#888'}}>출입구정보</Text>
              <Col>
                <Text style={{fontSize:12,}}>{item.gateInfo}</Text>
              </Col>
            </Row>
                  
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={()=>(
          <View style={{height:10,}}></View>
        )}
        ListEmptyComponent={()=>(
          <View style={{alignItems:'center',backgroundColor:'#f2f2f2',padding:20,borderRadius:5,}}>
            <Text>등록된 장소가 없습니다</Text>
          </View>
        )}
        ListFooterComponentStyle={{
          marginTop:30,
        }}
        ListFooterComponent={()=>(
          <TouchableOpacity
            onPress={()=> props.navigation.navigate('AddressRecord')}
            style={{
              height:50,
              alignItems:'center',
              justifyContent:'center',
              borderWidth:1,
              borderColor:'#e2e2e2',
              flexDirection:'row',
              borderRadius:5,
            }}
          >
            <Icon name="add-circle-outline" size={20} color={'#0CA0E2'} style={{marginRight:5}}/>
            <Text>장소 등록하기</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.index}
      />
    </View>
  )
}