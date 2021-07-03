import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const ProductContent = ({ name, description }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{name}</Text>
      </View>
      <View>
        <Text style={styles.content}>{description}</Text>
      </View>
    </View>
  )
}

export default ProductContent
