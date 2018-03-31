import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TabNav from './tabnav'

export default DrawerNavigator({
  DrawerItem: {
    screen: TabNav,
    navigationOptions: {
      drawerLabel: "Settings",
      drawerIcon: ({ tintColor }) => <Ionicons name="ios-settings" size={25} />
    }
  }
})
