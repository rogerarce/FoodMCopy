import React from 'react'
import { View, Image, Text } from 'react-native'
import LabelText from '../LabelText/'
import styles from './styles'

const Product = ({ img, name, description, price, prep_time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.body}>
        <View>
          <LabelText title={name} />
          <LabelText title="description" style='muted' />
        </View>
        <View>
          <LabelText title={price} />
        </View>
      </View>
    </View>
  )
}

export default Product
