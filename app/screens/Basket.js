import React, { Component } from 'react'
import { View, FlatList, Button, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LabelText from '../components/LabelText/'
import Product from '../components/BasketProduct/'
import data from '../lib/basket'

class Basket extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon = focused ? 'ios-basket' : 'ios-basket-outline'
      return <Ionicons name={icon} size={25} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
          <View>
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.name}
              renderItem={({ item }) => <Product {...item} />}
            />
          </View>
          <View>
            <LabelText title="Total 150" style='large' />
          </View>
          <View>
            <Button title="Proceed to checkout" onPress={() => console.log('f')} />
          </View>
      </View>
    )
  }
}

export default Basket
