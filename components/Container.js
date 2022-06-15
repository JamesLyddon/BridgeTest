import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

function Container(props) {
  return <View style={styles.container}>{props.children}</View>
}

export default Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'oldlace',
  },
})
