import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Teclado } from './components/Teclado';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Calculadora Sencilla</Text>
        </View>
      </View>
      <Teclado />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:20
  }
});
