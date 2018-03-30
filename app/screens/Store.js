import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StoreHeader from '../components/StoreHeader/'
import StoreProduct from '../components/StoreProduct/'
import ListSeparator from '../components/ListSeparator/'
import data from '../lib/data'
import store from '../lib/storedummydata'

class Store extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      let icon = focused ? 'ios-restaurant' : 'ios-restaurant-outline'
      return <Ionicons name={icon} size={25} color={tintColor} />
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StoreHeader path={store.img} />
        <View style={{ paddingTop: 2 }}>
          <FlatList 
            data={data} 
            keyExtractor={item => item.name}
            renderItem={({ item }) => <StoreProduct {...item} />}
            ItemSeparatorComponent={ListSeparator}
          />
        </View>
      </View>
    )
  }
}

export default Store
