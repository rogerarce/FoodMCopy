import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './style'

const Footer = ({ loading }) => {
  
  if (!loading) return null 

  return (
    <View style={styles.footer}>
      <ActivityIndicator animating size="large" />
    </View>
  )
}

export default Footer
