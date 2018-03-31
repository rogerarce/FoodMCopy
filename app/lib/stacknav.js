import React from 'react'
import { StackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Dashboard from '../screens/Dashboard'
import Product from '../screens/Product'
import Store from '../screens/Store'

export default StackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Product: {
    screen: Product, 
  },
  Store: {
    screen: Store,
  },
})
