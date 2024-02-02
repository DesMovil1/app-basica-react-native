import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Calcular } from './Calcular';
import { Icon } from './Icon';
import { Historial } from './Historial';

export const Teclado = () => {
  const [operacion, setOperacion] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [agregarAlHistorial, setHistorial] = useState(false);

  const handlePress = (button) => {
    if (button === '=') {
      if (operacion !== '') {
        setMostrarResultado(true);
        setHistorial(operacion);
      }
    } else if (button === 'C') {
      setOperacion(operacion.slice(0, -1));
    } else {
      setOperacion(mostrarResultado ? button : operacion + button);
      if (mostrarResultado) setMostrarResultado(false);
    }
  };

  const abrirHistorial = () => {
    setMostrarHistorial(true);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={abrirHistorial}>
          <Icon/>
        </TouchableOpacity>
        {mostrarHistorial && <Historial mostrar={mostrarHistorial} agregar={agregarAlHistorial} onClose={() => setMostrarHistorial(false)} />}
        <Text style={styles.operacion}>{operacion}</Text>
        {mostrarResultado && <Calcular operacion={operacion} onClose={() => { setOperacion(''); setMostrarResultado(false); }} />}

      </View>

      <View style={styles.cuadricula}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('7')}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('8')}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('9')}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('/')}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('4')}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('5')}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('6')}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('*')}>
            <Text>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('1')}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('2')}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('3')}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('-')}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('0')}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('+')}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('C')}>
            <Text>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('=')}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  operacion:{
    padding: 5,
    textAlign: 'center',
    marginTop: 25,
    fontSize: 17,
    fontWeight: 'bold'
  },
  cuadricula: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  btn: {
    width: 70,
    height: 70,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  button: {
    paddingRight:10,
    flex: 1,
    alignItems: 'flex-end',
  },
});
