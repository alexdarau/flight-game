import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonPrimary from './components/button'
import { initialArr } from './utils/data';
import Game  from './components/game'
export default function App() {
  return (
    <View style={styles.container}>
      <Game/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})