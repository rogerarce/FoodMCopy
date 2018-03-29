import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Product = ({ id, name, img, description, prep_time, price }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={{ uri: img }} style={styles.headerImg} />
    </View>
    <View style={styles.aside}>
      <Text style={styles.asideTxt}>{price}</Text>
    </View>
    <View style={styles.body}>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <View style={styles.bottom}>
        <Text style={styles.text}>Store Name</Text>
        <Text style={styles.text}>{prep_time}</Text>
      </View>
    </View>
  </View>
)

export default Product
