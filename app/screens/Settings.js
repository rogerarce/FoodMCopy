import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Ionicons name="ios-switch" size={25} color="#000" />
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.label}>Search Settings</Text>
            <Text style={styles.muted}>Adjust search settings for better search results</Text>
          </View>
          <View>
            <Text style={styles.label}>Distance</Text>
            <Text style={styles.muted}>distance between you and nearest store</Text>
            <TextInput value="300" style={styles.input} underlineColorAndroid='white'/>
          </View>
          <View>
            <Text style={styles.label}>Radius</Text>
            <Text style={styles.muted}>virtual perimeter used for searching</Text>
            <TextInput value="300" style={styles.input} underlineColorAndroid='white'/>
          </View>
          <View style={styles.divider} />
        </View>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    width: width,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
  },
  body: {
    height: height,
    backgroundColor: '#e0dede',
    padding: 20,
  },
  label: {
    fontSize: 20,
    color: '#222',
    margin: 5,
  },
  muted: {
    fontSize: 12,
    color: '#BFC1C2',
    marginLeft: 5,
  },
  input: {
    width: 100
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
})

export default Settings
