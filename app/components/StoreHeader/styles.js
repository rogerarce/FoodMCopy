import { StyleSheet, Dimensions } from 'react-native'

let { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
  },

  img: {
    width: '100%',
    height: 200,
  },
})
