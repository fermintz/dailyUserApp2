import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput, ScrollView} from 'react-native';
import styled from 'styled-components';
import Theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = styled.TextInput`
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  height: 42px;
  padding: 0 10px;
  background: #f8f8f8;
  text-align: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Col = styled.View`
  flex: 1;
`;


export default function CreditAdd(props) {

  const [isFocus, setIsFocus] = useState(false)
  const [cardCate, setCardCate] = useState(0);
  
  const NextSelect = (TextLength, next) => {
    if(TextLength === 4){
      if(next){
        next.current.focus()
      }else{
        return
      }
    }
  }
    
  const cardNum1 = useRef();
  const cardNum2 = useRef();
  const cardNum3 = useRef();
  const cardNum4 = useRef();

  return (
    <View style={Theme.layout.base}>
      <ScrollView>
        <View style={{marginBottom:26}}>
          <Text style={{fontSize: 20}}>사용하실 카드를 등록해주세요</Text>
        </View>

        <View>
          <Text style={{marginBottom: 5, fontSize: 12}}>카드번호</Text>

          <Row style={{marginBottom: 15}}>
            <Col style={{marginRight: 10}}>
              <Input
                ref={cardNum1}
                keyboardType="number-pad"
                maxLength={4}
                returnKeyType="next"
                autoFocus={true}
                onChangeText={(text)=> NextSelect(text.length, cardNum2)}
                selectionColor={'#292929'}
              />
            </Col>
            <Col style={{marginRight: 10}}>
              <Input
                keyboardType="number-pad"
                maxLength={4}
                ref={cardNum2}
                onChangeText={(text)=> NextSelect(text.length, cardNum3)}
                returnKeyType="next"
              />
            </Col>
            <Col style={{marginRight: 10}}>
              <Input
                keyboardType="number-pad"
                maxLength={4}
                ref={cardNum3}
                onChangeText={(text)=> NextSelect(text.length, cardNum4)}
                returnKeyType="next"
              />
            </Col>
            <Col>
              <Input 
                keyboardType="number-pad"
                maxLength={4}
                ref={cardNum4}
                onChangeText={(text)=> NextSelect(text.length, null)}
                returnKeyType="next"
              />
            </Col>
          </Row>

          <Row style={{marginBottom: 15}}>
            <Col style={{marginRight: 10}}>
              <Text style={{fontSize: 12, marginBottom: 5}}>만료일</Text>
              <Row style={{flex: 1}}>
                <Col style={{marginRight: 10}}>
                  <Input
                    maxLength={2}
                    placeholder="MM"
                    keyboardType="number-pad"
                  />
                </Col>
                <Col>
                  <Input
                    maxLength={2}
                    placeholder="YY"
                    keyboardType="number-pad"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Text style={{fontSize: 12, marginBottom: 5}}>카드비밀번호</Text>
              <Row>
                <Col>
                  <Input
                    keyboardType="number-pad"
                    placeholder="앞 2자리"
                    maxLength={2}
                    secureTextEntry={true}
                    editable
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Text style={{marginBottom: 5, fontSize: 12}}>
            {cardCate === 0 ? '생년월일' : '사업자번호'}
          </Text>

          <Row>
            {cardCate === 0 ? (
              <Col style={{marginRight: 10}}>
                <Input
                  keyboardType="number-pad"
                  placeholder="6자리"
                  maxLength={6}
                />
              </Col>
            ) : (
              <Col style={{marginRight: 10}}>
                <Input
                  keyboardType="number-pad"
                  placeholder="사업자번호 입력"
                  maxLength={10}
                />
              </Col>
            )}

            <Col>
              <Row style={{borderRadius: 5, overflow: 'hidden'}}>
                {['개인', '법인'].map((item, index) => (
                  <TouchableOpacity
                    onPress={() => setCardCate(index)}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 40,
                      backgroundColor: cardCate === index ? '#0CA0E2' : '#f2f2f2',
                    }}>
                    <Text style={{color: cardCate === index ? '#fff' : '#888'}}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </Row>
            </Col>
          </Row>
          {cardCate === 1 ? 
            <View style={{marginTop:10}}>
              <Text style={{color:'#888',fontSize:11}}>* 법인카드의 경우 카카오채팅으로 영수증을 요청해주시면 즉시 전달해 드립니다. (카카오톡 운영: 평일 09:00 ~ 18:00)</Text>
            </View>
            :
            null
          }
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
          onPress={()=>props.navigation.navigate('MyCredit')}
        >
          <Text style={{fontSize:16,color:'#0CA0E2'}}>완료하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
