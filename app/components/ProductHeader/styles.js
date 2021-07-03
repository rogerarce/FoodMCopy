import { StyleSheet, Dimensions } from 'react-native'

let { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
  },
  img: {
    width: width,
    height: 220,
  },
  pricing: {
    width: 65,
    height: 65,
    backgroundColor: '#FF8C8C',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    position: 'absolute',
    top: height * .29,
    right: 20,
  },
  price: {
    fontSize: 30,
    fontWeight: '100',
    fontFamily: 'Righteous-Regular',
  },
})
