import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { Teclado } from './components/Teclado';

export default function App() {
  return (
   <>
      <Text style={styles.container}>Calculadora Sencilla</Text>
      <Teclado/>
      <StatusBar style="auto" />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
  },
});
