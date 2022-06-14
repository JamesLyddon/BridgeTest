import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [userText, setUserText] = useState('')
  const [textLog, setTextLog] = useState(['first comment'])

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.whiteText}>Create a plank</Text>
        <TextInput
          style={styles.whiteText}
          placeholder="type here..."
          onChangeText={(newText) => setUserText(newText)}
          onSubmitEditing={() => {
            setTextLog([userText, ...textLog])
            setUserText('')
          }}
          defaultValue={userText}
        />
      </View>
      <View style={styles.textLog}>
        <View>
          {textLog.map((text) => (
            <Text style={styles.logs}>{text}</Text>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  whiteText: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'steelblue',
  },
  textLog: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'oldlace',
    alignItems: 'center',
    marginBottom: 10,
  },
  logs: {
    textAlign: 'center',
    fontSize: 22,
    color: 'oldlace',
    backgroundColor: 'steelblue',
    padding: 10,
    margin: 5,
    width: 330,
  },
})
