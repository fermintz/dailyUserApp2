import React,{useState} from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, FlatList, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal'
import styled from 'styled-components'




export default function BasketModal(props){
  const {visible, hidden} = props
  const [cardUseActive, setCardUseActive] = useState(0)
  const cardData = [
    {
      cardName:'신한카드',
      cardNum: '1345',
    },
    {
      cardName:'현대카드',
      cardNum: '8080',
    },
  ]

  const CardItem = ({item, index}) => (
    <CardItemStyle
      onPress={()=> setCardUseActive(index)}
      style={cardUseActive === index ? styles.active : null}
    >
      <View>
        <Text style={{fontSize:16,marginBottom:5}}>{item.cardName}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{marginRight:10}}>개인</Text>
          <Text style={{color:'#0CA0E2'}}>1123</Text>
        </View>
      </View>
      
      <Icon 
        name="check-circle-outline" 
        size={30}
        color={cardUseActive === index ? '#0CA0E2' : '#c2c2c2'}
      />
  
    </CardItemStyle>
  )

  return(
    <Modal
      isVisible={visible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={hidden}
      style={{padding:0,margin:0,overflow:'hidden'}}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
    >
      <CardSelectModal>
        <View style={{padding:24}}>
          <Text style={{fontSize:16,fontWeight:'bold',}}>결제카드 선택</Text>
          <Text style={{marginTop:5,color:'#888'}}>결제하실 카드를 선택 후 결제완료를 눌러주세요</Text>
        </View>
        <FlatList 
          data={cardData}
          renderItem={CardItem}
          keyExtractor={(item, index) => item.cardName}
          contentContainerStyle={{
            paddingHorizontal:24,
            paddingBottom:80,
          }}
          ListEmptyComponent={()=>
            <NoCard>
              <Text>등록된 카드가 없습니다</Text>
              <Text style={{fontSize:12,marginTop:5,color:'#888'}}>아래 카드추가 버튼을 통해 카드를 등록해주세요</Text>
            </NoCard>
          }
          ListFooterComponent={()=> 
            <CardAddBtn>
              <Icon name="plus" size={24} color={'#aaa'}/>
            </CardAddBtn>
          }
        />
        <FinishBtn>
          <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>34,900 <Text style={{fontSize:14,color:'#fff'}}>원</Text></Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#fff',marginRight:10,fontSize:16}}>결제완료</Text>
            <Icon name="arrow-right" size={18} color={'#fff'}></Icon>
          </View>
        </FinishBtn>
      </CardSelectModal>
  
      
    </Modal>
  )
}
const styles = StyleSheet.create({
  active:{
    borderColor:'#0CA0E2',
  },
})



const CardSelectModal = styled.View`
  position: absolute;
  bottom:0;
  width:100%;
  background:#fff;
  height:80%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const CardItemStyle = styled.TouchableOpacity`
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  border:1px solid #e2e2e2;
  margin-bottom:15px;
  background:#fff;
  border-radius:5px;
  padding:20px;
`

const FinishBtn = styled.TouchableOpacity`
  position:absolute;
  bottom:0px;
  height:56px;
  background:#0CA0E2;
  width:100%;
  padding-left:24;
  padding-right:24;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`

const CardAddBtn = styled.TouchableOpacity`
  flex-direction: row;
  background:#f2f2f2;
  width:50px;
  height:50px;
  justify-content: center;
  align-items: center;
  border-radius:25;
  align-self: center;
  margin-top:20;
`

const NoCard = styled.View`
  background-color: #fff;
  border-top-width:1px;
  border-bottom-width:1px;
  border-bottom-color:#e2e2e2;
  padding:30px 0;
  align-items: center;
`