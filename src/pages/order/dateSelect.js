import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Theme from '../../assets/theme';
import LoadingModal from '../../components/modal/loading'

export default function DateSelect(props) {
  
  const [Loading, setLoading] = useState(true)
  
  return (
    <View style={Theme.layout.base}>

      <LoadingModal visible={Loading} hidden={()=> setLoading(false)}/>
      
      <View>
        <Text style={{fontSize: 20}}>어떤 날짜가 괜찮으세요?</Text>
        <Text style={{color: '#898989', marginTop: 5}}>
          선택하신 날짜에 세탁물을 수거합니다
        </Text>
      </View>

      <FlatList
        data={[17, 18, 19, 20, 21, 22, 23, 24, 25]}
        numColumns={3}
        renderItem={({item}) => (
          <View style={{flex:1,alignItems:'center',justifyContent:'center',height: 120,}}>
            <TouchableOpacity
              onPress={()=> props.navigation.navigate('TimeSelect')}
            >
              <Text style={{fontSize: 32,fontWeight:'bold'}}>{item}</Text>
              <Text style={{color: '#898989'}}>월요일</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}
