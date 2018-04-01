import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import LabelText from '../LabelText/'
import styles from './styles'

const Product = ({ id, img, name, description, price, prep_time, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.body}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Product", { id: id })}>
            <LabelText title={name} />
          </TouchableOpacity>
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
