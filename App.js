import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import uuid from 'react-native-uuid'

import PlankGenerator from './components/PlankGenerator'

export default function App() {
  const [userGoal, setUserGoal] = useState('')
  const [userText, setUserText] = useState('')
  const [textLog, setTextLog] = useState([])

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.titleText}
          onChangeText={(newText) => setUserGoal(newText)}
          placeholder="What do you want to achieve?..."
          defaultValue={userGoal}
        />
        <PlankGenerator userText={userText} setUserText={setUserText} textLog={textLog} setTextLog={setTextLog} />
      </View>
      <View style={styles.textLog}>
        {textLog.map((text) => (
          <Text key={uuid.v4()} style={styles.logs}>
            {text}
          </Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'steelblue',
    borderRadius: 50,
  },
  plankText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 15,
  },
  input: {
    textAlign: 'center',
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'oldlace',
  },
  textLog: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'oldlace',
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

// BACKUP
// import { useState } from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
// import uuid from 'react-native-uuid'

// export default function App() {
//   const [userGoal, setUserGoal] = useState('')
//   const [userText, setUserText] = useState('')
//   const [textLog, setTextLog] = useState([])

//   return (
//     <View style={styles.container}>
//       <View style={styles.input}>
//         <TextInput
//           style={styles.titleText}
//           onChangeText={(newText) => setUserGoal(newText)}
//           placeholder="What do you want to achieve?..."
//           defaultValue={userGoal}
//         />
//         <TextInput
//           style={styles.plankText}
//           placeholder="add plank..."
//           onChangeText={(newText) => setUserText(newText)}
//           onSubmitEditing={() => {
//             setTextLog([...textLog, userText])
//             setUserText('')
//           }}
//           defaultValue={userText}
//         />
//       </View>
//       <View style={styles.textLog}>
//         {textLog.map((text) => (
//           <Text key={uuid.v4()} style={styles.logs}>
//             {text}
//           </Text>
//         ))}
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   titleText: {
//     color: '#fff',
//     fontSize: 20,
//     textAlign: 'center',
//     padding: 20,
//     marginBottom: 10,
//     backgroundColor: 'steelblue',
//     borderRadius: 50,
//   },
//   plankText: {
//     color: '#fff',
//     fontSize: 20,
//     textAlign: 'center',
//     backgroundColor: 'skyblue',
//     padding: 10,
//     borderRadius: 15,
//   },
//   input: {
//     textAlign: 'center',
//     padding: 20,
//     marginTop: 50,
//     alignItems: 'center',
//     backgroundColor: 'oldlace',
//   },
//   textLog: {
//     flex: 1,
//     flexDirection: 'column-reverse',
//     backgroundColor: 'oldlace',
//     alignItems: 'center',
//     marginBottom: 10,
//     elevation: -1,
//   },
//   logs: {
//     textAlign: 'center',
//     fontSize: 22,
//     color: 'oldlace',
//     backgroundColor: '#BA8C63',
//     padding: 10,
//     margin: 5,
//     width: 330,
//     borderRadius: 15,
//   },
// })
