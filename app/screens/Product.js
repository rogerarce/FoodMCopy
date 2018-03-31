import React, { Component } from 'react'
import { View, Image } from 'react-native'
import ProductHeader from '../components/ProductHeader/'
import ProductContent from '../components/ProductContent/'
import ProductFooter from '../components/ProductFooter/'
import LabelText from '../components/LabelText/'
import data from '../lib/data'

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    let { id } = navigation.state.params
    return {
      title: data[id - 1].name,
    }
  }

  render() {
    let { id } = this.props.navigation.state.params
    let product = data[id - 1]
    return (
      <View>
        <ProductHeader uri={product.img} price={product.price} />
        <ProductContent name={product.name} description={product.description} />
        <ProductFooter />
      </View>
    )
  }
}

export default Product
