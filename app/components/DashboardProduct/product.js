import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LabelText from '../LabelText/'
import styles from './styles'

const Product = ({ id, name, img, description, prep_time, price, navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={{ uri: img }} style={styles.headerImg} />
    </View>
    <View style={styles.aside}>
      <Text style={styles.asideTxt}>{price}</Text>
    </View>
    <View style={styles.body}>
      <TouchableOpacity onPress={() => navigation.navigate('Product', { id })}>
        <LabelText title={name}/>
      </TouchableOpacity>
      <LabelText title={description} style='muted' />
      <View style={styles.bottom}>
        <LabelText title="Store Name" />
        <LabelText title={prep_time} />
      </View>
    </View>
  </View>
)

export default Product
