import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

function PlankGenerator({ userText, textLog, setUserText, setTextLog }) {
  return (
    <TextInput
      style={styles.plankText}
      placeholder="add plank..."
      onChangeText={(newText) => setUserText(newText)}
      onSubmitEditing={() => {
        setTextLog([...textLog, userText])
        setUserText('')
      }}
      defaultValue={userText}
    />
  )
}

export default PlankGenerator

const styles = StyleSheet.create({
  plankText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 15,
  },
})
