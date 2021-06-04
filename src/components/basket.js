import React, {useEffect} from 'react';
import {View, Text, Pressable, FlatList, TouchableOpacity, Modal, Animated} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const BasketView = styled(Animated.View)`
  flex:1;
  position: absolute;
  width: 100%;
  height:100%;
  bottom: 0;
  z-index: 10;
  max-height:80%;
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

  const {visible, close} = props
  const basketOpen = new Animated.Value(-500)

  useEffect(() => {
    Animated.timing(basketOpen, {
      toValue: 0,
      delay: 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={'fade'}
    >
      <BasketView
        style={{
          bottom:basketOpen,
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
        />

        <View style={{padding: 26}}>
          <Row>
            <Text style={{fontSize: 12}}>총 금액</Text>
            <Text style={{color: '#F11064'}}>55,800</Text>
          </Row>
          <Row style={{marginTop: 15}}>
            <TouchableOpacity
              onPress={close}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 50,
                borderWidth: 1,
                borderColor: '#e2e2e2',
                borderRadius: 10,
              }}>
              <Text>장바구니 닫기</Text>
            </TouchableOpacity>
          </Row>
        </View>
      </BasketView>

      <View style={{
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.8)',
        width:'100%',
        height:'100%',
        zIndex:5,
      }}>

      </View>
      
    </Modal>
  );
}
