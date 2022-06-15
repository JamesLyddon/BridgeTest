import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import uuid from 'react-native-uuid'

function PlankGenerator({ userText, textLog, setUserText, setTextLog }) {
  return (
    <TextInput
      style={styles.plankText}
      placeholder="add plank..."
      onChangeText={(newText) => setUserText({ text: newText, id: uuid.v4() })}
      onSubmitEditing={() => {
        setTextLog([...textLog, userText])
        setUserText({ text: '', id: '' })
      }}
      defaultValue={userText.text}
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
    marginHorizontal: 10,
    marginVertical: 10,
  },
})
