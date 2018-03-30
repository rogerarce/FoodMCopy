import { StyleSheet, Dimensions } from 'react-native'

let { width, height } = Dimensions.get('window')

export default {
  container: {
    flexDirection: 'row',
    width: width,
    padding: 5,
    height: 109,
  },

  header: {
    width: '20%', 
  },

  img: {
    width: 80,
    height: 80,
  },

  body: {
    width: '80%', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 10,
  },
}
