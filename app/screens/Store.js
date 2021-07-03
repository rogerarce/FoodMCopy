import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StoreHeader from '../components/StoreHeader/'
import StoreProduct from '../components/StoreProduct/'
import ListSeparator from '../components/ListSeparator/'
import data from '../lib/data'
import store from '../lib/storedummydata'

class Store extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: ({ back }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={{ marginLeft: 20 }}>
            <Ionicons name="md-arrow-back" size={25} color="#000" />
          </TouchableOpacity>
        )
      },
    }
  }

  render() {
    let { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <StoreHeader path={store.img} />
        <View style={{ paddingTop: 2 }}>
          <FlatList 
            data={data} 
            keyExtractor={item => item.name}
            renderItem={({ item }) => <StoreProduct {...item} navigation={navigation} />}
            ItemSeparatorComponent={ListSeparator}
          />
        </View>
      </View>
    )
  }
}

export default Store
