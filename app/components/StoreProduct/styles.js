import { StyleSheet, Dimensions } from 'react-native'

let { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    backgroundColor: '#fff',
  },

  img: {
    width: 80,
    height: 80,
  },

  header: {
    width: width * .20,
  },

  body: {
    width: width * .80,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
  },
})
