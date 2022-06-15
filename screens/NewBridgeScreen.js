import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import Container from '../components/Container'
import UserGoal from '../components/UserGoal'
import PlankGenerator from '../components/PlankGenerator'
import PlankDisplay from '../components/PlankDisplay'

function NewBridgeScreen() {
  const [userGoal, setUserGoal] = useState('')
  const [userText, setUserText] = useState({ text: '', id: '' })
  const [textLog, setTextLog] = useState([])

  return (
    <Container>
      <StatusBar style="auto" />
      <UserGoal userGoal={userGoal} setUserGoal={setUserGoal} />
      <PlankDisplay textLog={textLog} />
      <PlankGenerator userText={userText} setUserText={setUserText} textLog={textLog} setTextLog={setTextLog} />
    </Container>
  )
}

export default NewBridgeScreen
