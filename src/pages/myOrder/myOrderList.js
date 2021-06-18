import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import PagerView from 'react-native-pager-view';
import styled from 'styled-components'
import Theme from '../../assets/theme'


const TabsView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding:0 26px;
  margin: 10px 0;
`
const TabBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`
const OrderItem = styled.View`
  border:1px solid #e2e2e2;
  background:#fff;
  padding:18px;
  padding-bottom:26px;
  border-radius:5px;
`
const TabBtnBar = styled.View`
  position: absolute;
  bottom:-1px;
  height:6px;
  width:100%;
  background:rgba(12,160,226,0.3);
`

export default function MyOrderView(props){

  const tabs = [
    {name:'세탁중'},
    {name:'세탁완료'},
    {name:'환불/취소'},
  ]

  const Data = [
    {
      state:0,
      stateText:'수거시작',
      date:'2021.05.13 (월) 12:34',
      title:'와이셔츠 외 13종',
      price: '136,700원',
    },
    {
      state:0,
      stateText:'수거시작',
      date:'2021.05.13 (월) 12:34',
      title:'와이셔츠 외 13종',
      price: '136,700원',
    },
  ]

  const completeData=[
    {
      state:2,
      stateText:'세탁종료',
      date:'2021.05.13 (월) 12:34',
      title:'와이셔츠 외 13종',
      price: '136,700원',
    },
  ]

  const refoundData=[
    {
      state:9,
      stateText:'환불완료',
      date:'2021.05.13 (월) 12:34',
      title:'와이셔츠 외 13종',
      price: '136,700원',
    },
  ]

  const [select, setSelect] = useState(0)
  const tabPages = useRef(null)
  const tabChanged = index => {
    tabPages.current.setPage(index)
  }

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{paddingHorizontal:26,height:120,justifyContent:'center'}}>
        <Text style={{fontSize:24,}}>
          <Text style={{color:Theme.colors.base}}>어흥</Text>님의
        </Text>
        <Text style={{fontSize:24,}}>주문내역입니다</Text>
      </View>

      <TabsView>
        {tabs.map((item, index)=>(
          <TabBtn
            onPress={()=> {tabChanged(index)}}
            style={{marginHorizontal:10}}
          >
            <Text style={{fontSize:18}}>{item.name}</Text>
            {select === index && <TabBtnBar></TabBtnBar> }
          </TabBtn>
        ))}
      </TabsView>

      <PagerView 
        initialPage={0}
        style={{flex:1,}}
        ref={tabPages}
        onPageSelected={e => setSelect(e.nativeEvent.position)}
      >
        
          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return(
                <TouchableOpacity  onPress={()=> props.navigation.navigate('MyOrderDetail')}>
                  <OrderItem>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{color:Theme.colors.base,}}>{item.stateText}</Text>
                      <Text style={{fontSize:12,color:'#898989'}}>{item.date}</Text>
                    </View>
                    <View style={{marginTop:10,}}>
                      <Text style={{fontSize:16}}>{item.title}</Text>
                      <Text style={{fontSize:12,marginTop:5}}>{item.price}</Text>
                    </View>
                  </OrderItem>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.index}
            contentContainerStyle={{padding:26}}
            ItemSeparatorComponent={()=>(
              <View style={{height:10,}}></View>
            )}
            ListEmptyComponent={()=>(
              <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderRadius:5,padding:20,borderColor:'#e2e2e2'}}>

                <Text style={{color:'#888'}}>사용중인 내역이 없습니다</Text>
            
                <TouchableOpacity
                  style={{
                    flexDirection:'row',
                    height:40,
                    backgroundColor:'#f2f2f2',
                    paddingHorizontal:15,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:20,
                    marginTop:20,
                  }}
                >
                  <Text>세탁 예약하기</Text>
                  <Icon name="arrow-forward-circle-outline" size={22} style={{marginLeft:10,}} color={'#0CA0E2'}/>
                </TouchableOpacity>
              </View>
            )}
          />

          <FlatList
            data={completeData}
            renderItem={({item, index}) => {
              return(
                <TouchableOpacity  onPress={()=> props.navigation.navigate('MyOrderDetail')}>
                  <OrderItem>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{color:'#20A849'}}>{item.stateText}</Text>
                      <Text style={{fontSize:12,color:'#898989'}}>{item.date}</Text>
                    </View>
                    <View style={{marginTop:10,}}>
                      <Text style={{fontSize:16}}>{item.title}</Text>
                      <Text style={{fontSize:12,marginTop:5}}>{item.price}</Text>
                    </View>
                  </OrderItem>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.index}
            contentContainerStyle={{padding:26}}
            ItemSeparatorComponent={()=>(
              <View style={{height:10,}}></View>
            )}
            ListEmptyComponent={()=>(
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>완료된 세탁이 없습니다</Text>
              </View>
            )}
          />

          <FlatList
            data={refoundData}
            renderItem={({item, index}) => {
              return(
                <TouchableOpacity  onPress={()=> props.navigation.navigate('MyOrderDetail')}>
                  <OrderItem>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{color:'#d22828'}}>{item.stateText}</Text>
                      <Text style={{fontSize:12,color:'#898989'}}>{item.date}</Text>
                    </View>
                    <View style={{marginTop:10,}}>
                      <Text style={{fontSize:16}}>{item.title}</Text>
                      <Text style={{fontSize:12,marginTop:5}}>{item.price}</Text>
                    </View>
                  </OrderItem>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.index}
            contentContainerStyle={{padding:26}}
            ItemSeparatorComponent={()=>(
              <View style={{height:10,}}></View>
            )}
            ListEmptyComponent={()=>(
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>환불내역이 없습니다</Text>
              </View>
            )}
          />
            
  
      </PagerView>
    </View>
  )
}
  