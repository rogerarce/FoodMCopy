import { StyleSheet, Dimensions } from 'react-native'
let { width, height } = Dimensions.get('window');

export default {
  container: {
    flexDirection: 'column',
    width: width,
    backgroundColor: '#fff',
  },

  header: {
    width: width,
    height: 180,
    alignItems: 'stretch',
  },

  headerImg: {
    flex: 1,
    width: 'auto',
    height: height,
  },

  aside: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 75,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    right: 20,
  },

  asideTxt: {
    alignSelf: 'center',
    fontSize: 25, 
    fontFamily: 'Raleway-Thin',
    color: '#222',
  },

  body: {
    padding: 20,
    flexDirection: 'column',
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}
