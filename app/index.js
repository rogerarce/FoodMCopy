import React from 'react'
import { DrawerNavigator, TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Dashboard from './screens/Dashboard'
import Store from './screens/Store'
import Basket from './screens/Basket'

const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Dashboard,
  }
})

const tabNav = TabNavigator({
  Dashboard: {
    screen: DashboardStack, 
  },
  Basket: {
    screen: Basket,
  },
  Store: {
    screen: Store,
  },
}, {
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

export default DrawerNavigator({
  DrawerItem: {
    screen: tabNav,
    navigationOptions: {
      drawerLabel: "Settings",
      drawerIcon: ({ tintColor }) => <Ionicons name="ios-settings" size={25} />
    }
  }
})
