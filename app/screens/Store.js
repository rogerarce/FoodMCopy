import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import store from '../lib/storedummydata'

let { width } = Dimensions.get('window')

class Store extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: store.img }} style={{ width, height: 200 }} />
        <Text>{store.name}</Text>
        <Text>{store.rating}</Text>
        <Text>{store.description}</Text>
      </View>
    )
  }
}

export default Store
