import React from 'react'
import { View, Image } from 'react-native'
import LabelText from '../LabelText/'
import styles from './styles'

const Product = ({ id, name, description, price, quantity, img, subtotal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.body}>
        <View>
          <LabelText title={name} style='large'/>
          <LabelText title="description" style='muted' />
          <LabelText title={`Quantity ${quantity}`} style='label1' />
        </View>
        <View style={styles.other}>
          <LabelText title={subtotal} style='pricing'/>
        </View>
      </View>
    </View>
  )
}

export default Product
