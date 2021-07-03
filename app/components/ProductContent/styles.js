import { StyleSheet, Dimensions } from 'react-native'

let { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  header: {
    color: '#000',
    fontSize: 20,
    fontWeight: '200',
  },
  content: {
    fontSize: 14,
    fontWeight: '100',
    alignSelf: 'center',
    textAlign: 'center',
  }
})
