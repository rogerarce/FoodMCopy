import React, { Component } from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native'
import ProductListing from '../components/ProductListing/'
import data from '../lib/data'

class Dashboard extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#F2F2F2', flex: 1 }}>
        <ProductListing products={data} />
      </View>
    )
  }
}

export default Dashboard
