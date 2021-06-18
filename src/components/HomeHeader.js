import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import AddressSelect from '../components/modal/addressSelect'

export default function HomeHeader(props){

  
  const [selected, setSelected] = useState(false)
  
  return(
    <View style={{backgroundColor:'#fff', zIndex:99}}>
      <AddressSelect visible={selected} hidden={()=>setSelected(false)} {...props}/>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
          borderBottomWidth: 1,
          borderColor: '#e2e2e2',
          paddingHorizontal: 15,
          zIndex:99,
        }}>
        
        
        <TouchableOpacity
          onPress={()=>setSelected(true)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18,fontWeight:'bold'}}>우리집</Text>
          <Icon
            name="chevron-down-outline"
            size={20}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#0CA0E2',
            backgroundColor: '#fff',
          }}
          onPress={() => props.navigation.navigate('Order')}>
          <Text style={{fontSize: 16, color: '#292929'}}>세탁예약</Text>
          <Icon
            name="arrow-forward-circle-outline"
            size={20}
            color={'#0CA0E2'}
            style={{marginLeft: 5}}
          />
        </TouchableOpacity>       
      </View>
    </View>
  )
}