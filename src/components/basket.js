import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal'



const BasketData = [
  {
    name: '와이셔츠',
    price: 1500,
  },
  {
    name: '정장하의',
    price: 3500,
  },
  {
    name: '정장하의',
    price: 3500,
  },
  {
    name: '정장하의',
    price: 3500,
  },
  {
    name: '정장하의',
    price: 3500,
  },
  {
    name: '정장하의',
    price: 3500,
  },
];

const BasketItem = props => {
  const item = props.data;
  return (
    <BasketItemView>
      <Row>
        <Text>{item.name}</Text>
        <TouchableOpacity
          style={{
            width: 26,
            height: 26,
            backgroundColor: '#d2d2d2',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <Icon name="close-outline" size={20} color={'#fff'} />
        </TouchableOpacity>
      </Row>
      <View
        style={{height: 1, backgroundColor: '#e2e2e2', marginVertical: 12}}
      />
      <Row>
        <Row style={{justifyContent: 'flex-start'}}>
          <AmountBtn>
            <Icon name="add-outline" size={16} />
          </AmountBtn>
          <View style={{marginHorizontal: 10}}>
            <Text>01</Text>
          </View>
          <AmountBtn>
            <Icon name="remove-outline" size={16} />
          </AmountBtn>
        </Row>
        <Text>{item.price}원</Text>
      </Row>
    </BasketItemView>
  );
};

export default function Basket(props) {

  const {visible, hidden} = props

  return (
    <Modal
      isVisible={visible}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      onBackdropPress={hidden}
      style={{margin:0,paddingTop:100,}}
      deviceHeight={500}
    >
      <BasketView
        style={{
          borderTopLeftRadius: 13,
          borderTopRightRadius: 13,
          backgroundColor:'#fff',
        }}
      >
        <FlatList
          data={BasketData}
          renderItem={({item}) => <BasketItem data={item} />}
          contentContainerStyle={{padding: 26}}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View>
              <Text>등록된 상품이 없습니다</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
          keyExtractor={item => item.index}
        />

        <Row style={{paddingHorizontal:20,height:60,borderTopWidth:1,borderColor:'#e2e2e2',}}>
          <Row style={{flex:2,paddingRight:20,borderRightWidth:1,borderColor:'#e2e2e2'}}>
            <Text style={{fontSize: 12}}>총 금액</Text>
            <Text style={{color: '#F11064',fontSize:16,fontWeight:'bold'}}>55,800</Text>
          </Row>
          <View style={{flex:1,marginLeft:20,}}>
            <TouchableOpacity
              onPress={hidden}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal:10,
                height: 40,

              }}>
              <Text>장바구니 닫기</Text>
            </TouchableOpacity>
          </View>
        </Row>
      </BasketView>      
    </Modal>
  );
}


const BasketView = styled.View`
  width: 100%;
  height:100%;
  bottom: 0;
  z-index: 10;

  background: #fff;
`;

const BasketItemView = styled.View`
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  padding: 12px;
`;

const AmountBtn = styled.TouchableOpacity`
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;