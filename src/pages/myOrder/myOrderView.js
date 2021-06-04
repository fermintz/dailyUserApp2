import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
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
        {tabs.map(() => (
          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return(
                <TouchableOpacity>
                  <OrderItem>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{color:Theme.colors.base}}>{item.stateText}</Text>
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
          >
            
          </FlatList>
        ))}
      </PagerView>
    </View>
  )
}
  