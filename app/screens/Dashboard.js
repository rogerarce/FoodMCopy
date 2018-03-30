import React, { Component } from 'react'
import { View, Text, FlatList, Image, Button, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductListing from '../components/ProductListing/'
import data from '../lib/data'

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({ focused, tintColor }) => {
        let iconName = focused ? 'ios-home' : 'ios-home-outline'
        return <Ionicons name={iconName} size={25} color={tintColor} />
      },
      headerLeft: (
        <TouchableOpacity style={{ padding: 20 }} onPress={() => navigation.navigate('DrawerOpen')}>
          <Ionicons name='ios-menu' size={30} color="#fff" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#F77272',
      },
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
