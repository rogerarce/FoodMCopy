import React, { Component } from 'react'
import { View, Image, Text, FlatList, Dimensions, Button } from 'react-native'
import { PropTypes } from 'prop-types'
import ListFooter from '../ListingFooter/'
import ListSeparator from '../ListSeparator/'
import Product from '../DashboardProduct/'
import styles from './styles'

let { width } = Dimensions.get('window')

const ProductListing = ({ products, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Product {...item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ListSeparator}
        ListFooterComponent={ListFooter}
      />
    </View>
  )
}

export default ProductListing
