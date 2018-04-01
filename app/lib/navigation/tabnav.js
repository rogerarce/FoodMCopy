import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StackNavs from './stacknav'
import Basket from '../../screens/Basket'
import Profile from '../../screens/Profile'
import colors from '../styles/colors'

export default TabNavigator({
  Main: {
    screen: StackNavs, 
    navigationOptions: ({ navigate }) => {
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused ? 'ios-home' : 'ios-home-outline'
          return <Ionicons name={icon} size={25} color={tintColor} />
        }
      }
    }
  },
  Basket: {
    screen: Basket,
    navigationOptions: ({ navigate }) => {
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused ? 'ios-basket' : 'ios-basket-outline'
          return <Ionicons name={icon} size={25} color={tintColor} />
        }
      }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigate }) => {
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon = focused ? 'ios-person' : 'ios-person-outline'
          return <Ionicons name={icon} size={25} color={tintColor} />
        }
      }
    }
  }
}, {
  animationEnabled: true,
  swipeEnabled: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: "bottom",
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.gray,
    inactiveTintColor: colors.dark,
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: colors.light,
    },
  },
})
