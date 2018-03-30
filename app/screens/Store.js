import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import StoreHeader from '../components/StoreHeader/'
import StoreProduct from '../components/StoreProduct/'
import ListSeparator from '../components/ListSeparator/'
import data from '../lib/data'
import store from '../lib/storedummydata'

const Store = () => {
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

export default Store
