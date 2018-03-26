import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import data from '../lib/data'

export default class Dashboard extends Component {

  _keyExtractor = (item, index) => item.name

  productItem ({ item }) {
    return (
      <View>
        <Image style={{ width: 150, height: 150 }} source={{ uri: item.img }} />
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
        <Text>{item.prep_time}</Text>
      </View>
    )
  }
  
  render() {
    return (
      <View>
        <Text>Dashboard Display</Text>
        <FlatList 
          data={data} 
          keyExtractor={this._keyExtractor}
          renderItem={this.productItem}
        />
      </View>
    )
  }
}
