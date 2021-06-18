import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Header from './components/Header';
import Splash from './pages/splash';
import Login from './pages/login';
import PhoneCheck from './pages/phoneCheck';

import Home from './pages/home';
import MyPage from './pages/mypage'
import MyOrderList from './pages/myOrder/myOrderList'
import BottomNavigator from './components/BottomNavigator'

import MyCoupon from './pages/myCoupon'
import MyInfo from './pages/myInfo'

import DateSelect from './pages/order/dateSelect'
import TimeSelect from './pages/order/timeSelect'
import Product from './pages/order/product'
import UserAsk from './pages/order/userAsk'
import OrderDetail from './pages/order/detail'
import OrderFinish from './pages/order/Finish'

import MyCredit from './pages/credit/myCredit'
import CreditAdd from './pages/credit/creditAdd'
import MyAddress from './pages/myAddress'
import MyOrderDetail from './pages/myOrder/myOrderDetail'

import AddressInput from './pages/addressRecord/addressInput'
import GateInput from './pages/addressRecord/gateInput'

import DailyPrice from './pages/dailyPrice'
import DeliveryInfo from './pages/myOrder/DeliveryInfo'

import Notice from './pages/notice'
import HowTo from './pages/howTo'
import Event from './pages/event'


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Order = createStackNavigator();
const Address = createStackNavigator();

//예약하기
function OrderStack(){
  return(
    <Order.Navigator
      initialRouteName="DateSelect"
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Order.Screen 
        name="DateSelect"
        component={DateSelect}
      />
      <Order.Screen 
        name="TimeSelect"
        component={TimeSelect}
      />
      <Order.Screen 
        name="Product"
        component={Product}
      />
      <Order.Screen
        name="UserAsk"
        component={UserAsk}
      />
      <Order.Screen
        name="OrderDetail"
        component={OrderDetail}
      />
      <Order.Screen
        name="OrderFinish"
        component={OrderFinish}
        options={{
          headerShown:false
        }}
      />
    </Order.Navigator>
  )
}

//주소등록하기
function AddressRecord(){
  return(
    <Address.Navigator
      initialRouteName="AddressInput"
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Address.Screen
        name="AddressInput"
        component={AddressInput}
      />
      <Address.Screen
        name="GateInput"
        component={GateInput}
      />
    </Address.Navigator>
  )
}

//메인화면
function Main(){
  return(
    <BottomTab.Navigator
      initialRouteName="Home"
      backBehavior="none"
      tabBar={props => <BottomNavigator {...props} />}
    >
      <BottomTab.Screen
        name="MyOrder"
        component={MyOrderList}
      />
      <BottomTab.Screen 
        name="Home"
        component={Home}
      />
      <BottomTab.Screen 
        name="Mypage"
        component={MyPage}
      />
    </BottomTab.Navigator>
  )
} 

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen 
        name="PhoneCheck"
        component={PhoneCheck}
        options={{
          headerShown:true,
          header:(props)=><Header {...props}/>
        }}
        />
        <Stack.Screen 
          name="Main"
          component={Main}
        />
        <Stack.Screen 
          name="Order"
          component={OrderStack}
        />
        <Stack.Screen 
          name="MyCredit"
          component={MyCredit}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen
          name="CreditAdd"
          component={CreditAdd}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen
          name="MyAddress"
          component={MyAddress}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen
          name="AddressRecord"
          component={AddressRecord}
        />
        <Stack.Screen
          name="MyCoupon"
          component={MyCoupon}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen
          name="MyInfo"
          component={MyInfo}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen
          name="DailyPrice"
          component={DailyPrice}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen 
          name="MyOrderDetail"
          component={MyOrderDetail}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen 
          name="DeliveryInfo"
          component={DeliveryInfo}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen 
          name="Notice"
          component={Notice}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen 
          name="HowTo"
          component={HowTo}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
        <Stack.Screen 
          name="Event"
          component={Event}
          options={{
            headerShown:true,
            header:(props)=><Header {...props}/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}