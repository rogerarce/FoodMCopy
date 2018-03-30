import { StyleSheet, Dimensions } from 'react-native'

let { width } = Dimensions.get('window')

export default StyleSheet.create({
  separator: {
    height: 5,
    width: width,
    backgroundColor: '#CED0CE',
  }
})
