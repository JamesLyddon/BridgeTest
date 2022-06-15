import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Container from '../components/Container'

function WelcomeScreen() {
  return (
    <Container>
      <Text>Hello There</Text>
    </Container>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'oldlace',
  },
})
