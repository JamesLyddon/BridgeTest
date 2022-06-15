import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function PlankDisplay({ textLog }) {
  return (
    <View style={styles.textLog}>
      {textLog.map((text) => (
        <Text key={text.id} style={styles.logs}>
          {text.text}
        </Text>
      ))}
    </View>
  )
}

export default PlankDisplay

const styles = StyleSheet.create({
  textLog: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    marginBottom: 10,
    elevation: -1,
  },
  logs: {
    textAlign: 'center',
    fontSize: 22,
    color: 'oldlace',
    backgroundColor: '#BA8C63',
    padding: 10,
    margin: 5,
    width: 330,
    borderRadius: 15,
  },
})
