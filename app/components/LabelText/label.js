import React from 'react'
import { Text, StyleSheet } from 'react-native'

const LabelText = ({ title, style = 'label' }) => {
  return <Text style={styles[style]}>{title}</Text>
}

const styles = StyleSheet.create({ 
  label: {
    fontSize: 20,
    fontWeight: '100',
    fontFamily: 'Roboto',
    color: '#323333',
  },
  
  pricing: {
    fontSize: 20,
    fontWeight: '200',
    fontFamily: 'Righteous',
    color: '#323333',
  },
  
  label1: {
    fontSize: 15,
    fontWeight: '100',
    fontFamily: 'Roboto',
    color: '#323333',
  },
  
  muted: {
    fontSize: 13,
    fontFamily: 'Roboto',
    color: '#BFC1C2',
  },

  large: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#323333',
  },
})

export default LabelText
