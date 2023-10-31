import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Audio } from 'expo-av';
import Screen from './components/Screen'
import Recordings from './components/Recordings'
import StartRec from './components/StartRec'

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView>
   <StartRec/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
