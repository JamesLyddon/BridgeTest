import React from 'react'
import { StyleSheet, TextInput, Alert } from 'react-native'
import uuid from 'react-native-uuid'

function PlankGenerator({ userText, textLog, setUserText, setTextLog }) {
  return (
    <TextInput
      style={styles.plankText}
      placeholder="add plank..."
      onChangeText={(newText) => setUserText({ text: newText, id: uuid.v4() })}
      onSubmitEditing={() => {
        if (userText.text !== '') {
          setTextLog([...textLog, userText])
          setUserText({ text: '', id: '' })
        } else {
          Alert.alert(
            'No text entered',
            "Type out a significant 'stepping stone' in achieving your goal.\n\nThese can be reordered and edited later.",
            [{ text: 'Got it', onPress: () => console.log('OK Pressed') }]
          )
        }
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
