import React, { Component } from 'react'
import { View, TouchableOpacity, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductListing from '../components/ProductListing/'
import data from '../lib/data'

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity style={{ padding: 20 }} onPress={() => navigation.navigate('DrawerOpen')}>
          <Ionicons name='ios-menu' size={30} color="#e0dede" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
    }
  }
    
  render() {
    return (
      <View style={{ backgroundColor: '#F2F2F2', flex: 1 }}>
        <ProductListing products={data} navigation={this.props.navigation} />
      </View>
    )
  }
}

export default Dashboard
