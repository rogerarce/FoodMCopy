import React, { Component } from 'react'
import { View, Text, FlatList, Button, Image } from 'react-native'

let data = [
  {
    id: 1,
    name: 'Pandesal',
    price: 5,
    quantity: 10,
    subtotal: 50
  },
  {
    id: 2,
    name: 'Ensaimada',
    price: 20,
    quantity: 5,
    subtotal: 100 
  }
]

class Basket extends Component {
  render() {
    return (
      <View>
          <View>
            <Text>Basket</Text>
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.name}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.quantity}</Text>
                    <Text>{item.subtotal}</Text>
                  </View>
                )
              }}
            />
          </View>
          <View>
            <Text>Total 150</Text>
          </View>
          <View>
            <Button title="Proceed to checkout" onPress={() => console.log('f')} />
          </View>
      </View>
    )
  }
}

export default Basket
