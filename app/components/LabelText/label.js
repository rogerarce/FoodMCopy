import React from 'react'
import { Text, StyleSheet } from 'react-native'

const LabelText = ({ title, style = 'label' }) => {
  return <Text style={styles[style]}>{title}</Text>
}

const styles = StyleSheet.create({ 
  label: {
    fontSize: 19,
    fontFamily: 'Rigtheous-Regular',
    color: '#323333',
  },
  
  pricing: {
    fontSize: 15,
    fontWeight: '200',
    fontFamily: 'Raleway-Thin',
    color: '#323333',
  },
  
  label1: {
    fontSize: 15,
    fontWeight: '100',
    fontFamily: 'Raleway-Thin',
    color: '#323333',
  },
  
  muted: {
    fontSize: 13,
    fontFamily: 'Raleway-Thin',
    color: '#BFC1C2',
  },

  large: {
    fontSize: 19,
    fontFamily: 'Raleway-Thin',
    color: '#323333',
  },
})

export default LabelText
