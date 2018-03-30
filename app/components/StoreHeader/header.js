import React from 'react'
import { View, Image } from 'react-native'
import LabelText from '../LabelText/'
import styles from './styles' 

const Header = ({ path }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: path }} />
    </View>
  )
}

export default Header
