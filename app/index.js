import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Dashboard from './screens/Dashboard'
import Store from './screens/Store'
import Basket from './screens/Basket'

const Screens = {
  Dashboard: {
    screen: Dashboard, 
  },
  Basket: {
    screen: Basket,
  },
  Store: {
    screen: Store,
  },
}

export default TabNavigator(Screens, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#fff',
    inactiveTintColor: '#eee',
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: '#F77272',
    },
  },
})
