import React from 'react'
import { View, Text, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const ProductFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <View style={styles.box}>
            <Ionicons name="ios-remove" size={40} color="#000" />
          </View>
          <View style={styles.box}>
            <Text style={styles.quantity}>5</Text>
          </View>
          <View style={styles.box}>
            <Ionicons name="ios-add" size={40} color="#000" />
          </View>
      </View>
      <View style={styles.footer}>
        <Button title="Add to basket" onPress={() => console.log('f')}/>
      </View>
    </View>
  )
}

export default ProductFooter
