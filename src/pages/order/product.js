import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import styled from 'styled-components';
import PagerView from 'react-native-pager-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../../assets/theme'
import Basket from '../../components/basket'


const TabBtn = styled.TouchableOpacity`
  width: 60px;
  padding:10px 0;
  justify-content: center;
  align-items: center;
`
const TabBtnLine = styled.View`
  opacity:${props => props.active === props.index ? 1 : 0};
  position:absolute;
  bottom:0px;
  width:100%;
  height:2px;
  border-radius:3px;
  background-color: ${Theme.colors.base};
`
const TabBtnImage = styled.Image`
  width:22px;
  height:22px;
`
const TabBtnText = styled.Text`
  margin-top:6px;
  font-size:9px;
  color:#292929;
`

const BottomBtn = styled.TouchableOpacity`
  height:50px;
  border:1px solid #e2e2e2;
  justify-content: center;
  align-items: center;
  border-radius:5px;

`

export default function Product(props) {
  const ProductData = [
    {
      icon: require('../../assets/img/product-icon1.png'),
      cateName: '필독사항',
      goods: null,
    },
    {
      icon: require('../../assets/img/product-icon2.png'),
      cateName: '사장님전용',
      goods: [
        {
          name: '미용실수건류 50L',
          price: 15900,
        },
      ],
    },
    {
      icon: require('../../assets/img/product-icon3.png'),
      cateName: '명품관',
      goods: [
        {
          name: '명품 셔츠/남방',
          price: 11900,
        },
      ],
    },
    {
      icon: require('../../assets/img/product-icon4.png'),
      cateName: '상의',
      goods: [
        {
          name: '흰색 와이셔츠',
          price: 1800,
        },
        {
          name: '교복셔츠',
          price: 1800,
        },
        {
          name: '일반티셔츠',
          price: 3900,
        },
        {
          name: '흰색 와이셔츠',
          price: 1800,
        },
        {
          name: '교복셔츠',
          price: 1800,
        },
        {
          name: '일반티셔츠',
          price: 3900,
        },
        {
          name: '흰색 와이셔츠',
          price: 1800,
        },
        {
          name: '교복셔츠',
          price: 1800,
        },
        {
          name: '일반티셔츠',
          price: 3900,
        },
      ],
    },
    {
      icon: require('../../assets/img/product-icon5.png'),
      cateName: '상의외투',
      goods: [
        {
          name: '정장/교복자켓',
          price: 7900,
        },
      ],
    },
    {
      icon: require('../../assets/img/product-icon6.png'),
      cateName: '하의',
      goods: [
        {
          name: '바지/스커트',
          price: 4900,
        },
      ],
    },
    {
      icon: require('../../assets/img/product-icon7.png'),
      cateName: '침구류',
      goods: [
        {
          name: '베게커버',
          price: 1900,
        },
      ],
    },
    {
      icon: require('../../assets/img/product-icon8.png'),
      cateName: '커튼/러그',
      goods: [
        {
          name: '쇼파커버',
          price: 4900,
        },
      ],
    },
    {
      icon: require('../../assets/img/product-icon9.png'),
      cateName: '신발류/기타',
      goods: [
        {
          name: '일반운동화(물빨래)',
          price: 5900,
        },
      ],
    },
  ];

  
  const tabPages = useRef(null);
  const tabChanged = index => {
    tabPages.current.setPage(index);
  };

  const tabMenu = useRef(null);
  const [tabActive, setTabActive] = useState(0);
  const [layoutWidth, setLayoutWidth] = useState(0);

  useEffect(() => {

    const contentWidth = 60 * ProductData.length + 30;
    const index = tabActive;

    let offsetX;
    if (index > 2 && index < ProductData.length - 3) {
      offsetX =
        ((contentWidth - layoutWidth) / (ProductData.length - 6)) * (index - 2.5);
    } else if (index <= 3) {
      offsetX = 0;
    } else {
      offsetX = contentWidth - layoutWidth;
    }
    tabMenu.current.scrollTo({x: offsetX, y: 0});
  }, [tabMenu, tabActive]);

  const ViewPagerHandle = e => {
    const target = e.nativeEvent.position;
    setTabActive(target);
  };
  
  const [basket, setBasket] = useState(false);
  const [snackBar, setSnackBar] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>

      <Basket visible={basket} close={() => setBasket(false)}/>

      <View style={{marginBottom: 20, paddingHorizontal: 26}}>
        <Text style={{fontSize: 20}}>맡기실 세탁물을 선택해주세요</Text>
      </View>

      <View
        style={{borderBottomWidth:1,borderColor:'#e2e2e2'}}
      >
        <ScrollView
          ref={tabMenu}
          horizontal={true}
          scrollEventThrottle={32}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          onLayout={e => {
            setLayoutWidth(e.nativeEvent.layout.width);
          }}
        >
          {ProductData.map((item, index) => (
            <TabBtn
              onPress={()=>tabChanged(index)} 
            >
              <TabBtnImage
                source={item.icon}
                resizeMode={'contain'}
                active={tabActive}
                index={index}
              />
    
              <TabBtnText
                active={tabActive}
                index={index}
              >{item.cateName}</TabBtnText>
              <TabBtnLine 
                active={tabActive}
                index={index}
              />
            </TabBtn>
          ))}
        </ScrollView>
      </View>

      <PagerView
        initialPage={1}
        style={{flex: 1, backgroundColor: '#fff'}}
        contentContainerStyle={{paddingHorizontal: 26}}
        ref={tabPages}
        onPageSelected={e => ViewPagerHandle(e)}>
        {ProductData.map((items, index) => {
          return (
            <View>
              <FlatList
                data={items.goods}
                contentContainerStyle={{
                  padding:26,
                }}
                scro
                renderItem={({item, idx}) => {
                  return (
                    <View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginRight: 20,
                          }}>
                          <View style={{flex:1,marginRight:10,}}>
                            <Text style={{fontSize:13}}>{item.name}</Text>
                            <Text
                              style={{
                                fontSize: 11,
                                color: '#797979',
                                marginTop: 5,
                              }}>
                              상품설명입니다
                            </Text>
                          </View>
                          
                          <Text style={{fontSize:14}}>{item.price}원</Text>
                        </View>

                        <TouchableOpacity
                          style={{
                            width: 36,
                            height: 36,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#e2e2e2',
                            marginRight: 10,
                            borderRadius: 100,
                          }}>
                          <Icon name="information-outline" size={18} />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={()=>setSnackBar(true)}
                          style={{
                            width: 36,
                            height: 36,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor:'#e2e2e2',
                            borderRadius: 100,
                          }}>
                          <Icon name="add-outline" size={18} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
                keyExtractor={item => item.index}
                ItemSeparatorComponent={()=>(
                  <View style={{height:1,backgroundColor:'#eaeaea',marginVertical:20,}} /> 
                )}
                
              />
            </View>
          );
        })}
      </PagerView>

      <View
        style={{
          paddingHorizontal:15,
          paddingBottom:15,
          flexDirection:'row'
        }}
      >
        <BottomBtn
          style={{flex:1,marginRight:10,flexDirection:'row'}}
          onPress={()=> setBasket(true)}
        >
          <Text>장바구니</Text>
          <View style={{width:18,height:18,borderRadius:100,marginLeft:4,backgroundColor:'#F11064', justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:10,color:'#fff'}}>99</Text>
          </View>
        </BottomBtn>
        <BottomBtn
          style={{flex:2,borderWidth:0,backgroundColor:'#0CA0E2'}}
          onPress={()=>props.navigation.navigate('UserAsk')}
        >
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:16,}}>14,900원 주문하기</Text>
        </BottomBtn>
      </View>
    </View>
  );
}
