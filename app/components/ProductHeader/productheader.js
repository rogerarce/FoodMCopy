import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

const ProductHeader = ({ uri, price }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.img} />
      <View style={styles.pricing}>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </View>
  )
}

export default ProductHeader
