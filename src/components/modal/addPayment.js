import React, {useState} from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PaymentModal(props){
  const {visible, hidden} = props;

  const cardData = [
    {
      name: '삼성카드',
      num: 1351,
      cate: '개인',
    },
    {
      name: '현대카드',
      num: 8989,
      cate: '법인',
    },
  ];

  const [cardActive, setCardActive] = useState(0)

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={hidden}
      animationOut={'fadeOutDown'}
      onBackButtonPress={hidden}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 5}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18,fontWeight:'bold'}}>추가 결제하기</Text>
          <TouchableOpacity onPress={hidden}>
            <Icon name="close" size={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{color: '#888'}}>결제금액</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>5,000 원</Text>
        </View>

        <Text style={{color: '#888',marginBottom:20,}}>결제카드 선택</Text>
        <FlatList
          data={cardData}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: cardActive === index ? '#0CA0E2' : '#e2e2e2',
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={()=> setCardActive(index) }
              >
              {cardActive === index ?
              <Icon name="checkmark-circle-outline" size={20} color={'#0CA0E2'}/>
              : null  
              }
              <Text style={{fontSize: 16,flex:1,marginLeft:3,}}>{item.name}</Text>
              <View
                style={{
                  flexDirection: 'row', alignItems: 'center',
                }}>
                <Text style={{fontSize: 12, color: '#888'}}>{item.cate}</Text>
                <Text style={{fontSize: 12, marginLeft: 10, color: '#0CA0E2'}}>
                  {item.num}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={()=>(
            <View style={{height:10}}></View>
          )}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{
              width: 150,
              borderRadius: 100,
              height: 40,
              backgroundColor: '#0CA0E2',
              justifyContent: 'center',
              alignItems: 'center',
              }}
              onPress={hidden}
            >
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              결제하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};