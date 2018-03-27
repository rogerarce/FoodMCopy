import React, { Component } from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native'
import ProductListing from '../components/ProductListing/'
import data from '../lib/data'

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text>Dashboard Display</Text>
        <Button onPress={() => console.info('asda')} title="Search nearest treats..." />
        <ProductListing products={data} />
      </View>
    )
  }
}

export default Dashboard
