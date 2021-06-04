import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Notice(props) {
  const {visible, dismiss} = props;

  return (
    <Modal animationType={'fade'} visible={visible} transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',padding:30,}}>
        <View style={{width:'100%',backgroundColor: '#fff', margin: 40, zIndex: 2,borderRadius:5,overflow:'hidden'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height:50,
              paddingHorizontal:15,
              borderBottomWidth:1,
              borderColor:'#e2e2e2',
            }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>잘못된 접근입니다</Text>
            <TouchableOpacity onPress={dismiss}>
              <Icon name="close-outline" size={24} />
            </TouchableOpacity>
          </View>
          <View style={{padding:20}}>
            <Text style={{color:'#595959'}}>잘못된 접근을 하셨습니다 뒤로가기 버튼을 눌러주세요</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={dismiss}
        activeOpacity={1}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1,
        }}
      />
    </Modal>
  );
}
