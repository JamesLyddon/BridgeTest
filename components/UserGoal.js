import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

function UserGoal({ userGoal, setUserGoal }) {
  return (
    <TextInput
      style={styles.titleText}
      onChangeText={(newText) => setUserGoal(newText)}
      placeholder="What do you want to achieve?..."
      defaultValue={userGoal}
    />
  )
}

export default UserGoal

const styles = StyleSheet.create({
  titleText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    marginBottom: 0,
    backgroundColor: 'steelblue',
    borderRadius: 15,
    marginTop: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
})
