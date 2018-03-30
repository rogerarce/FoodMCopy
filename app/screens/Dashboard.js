import React, { Component } from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductListing from '../components/ProductListing/'
import data from '../lib/data'

class Dashboard extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = focused ? 'ios-home' : 'ios-home-outline'
      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }
    
  render() {
    return (
      <View style={{ backgroundColor: '#F2F2F2', flex: 1 }}>
        <ProductListing products={data} />
      </View>
    )
  }
}

export default Dashboard
