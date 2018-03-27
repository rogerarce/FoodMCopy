import React, { Component } from 'react'
import { View, Image, Text, FlatList } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'

class ProductListing extends Component {

  __keyExtractor = (item, index) => item.name

  __renderItem ({ item }) {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <Image style={{ width: 150, height: 150 }} source={{ uri: item.img }} />
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
        <Text>{item.prep_time}</Text>
      </View>
    )
  }

  render () {
    let { products } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={this.__keyExtractor}
          renderItem={this.__renderItem}
        />
      </View>
    )
  }
}

export default ProductListing
