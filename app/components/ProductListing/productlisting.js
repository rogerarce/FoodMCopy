import React, { Component } from 'react'
import { View, Image, Text, FlatList, Dimensions, Button } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'
import Product from '../DashboardProduct/'

let { width } = Dimensions.get('window')

class ProductListing extends Component {

  __keyExtractor = (item, index) => item.name

  __renderItem ({ item }) {
    return <Product {...item} />
  }

  __renderSeparator () {
    return (
      <View
        style={{
          height: 5,
          width: width,
          backgroundColor: '#CED0CE',
        }}
      />
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
          ItemSeparatorComponent={this.__renderSeparator}
        />
      </View>
    )
  }
}

export default ProductListing
