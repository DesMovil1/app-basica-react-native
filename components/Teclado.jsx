import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Teclado = () => {
  const [operacion, setOperacion] = useState('');

  const handlePress = (button) => {
    setOperacion(operacion + button);
  };

  return (
    <>
      <Text style={styles.operacion}>{operacion}</Text>
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
          <TouchableOpacity style={styles.btn} onPress={() => setOperacion('')}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  operacion:{
    padding:5,
    textAlign:'center',
    marginTop:25,
    fontSize:17,
    fontWeight:'bold'
  },
  cuadricula: {
    padding: 10,
    flex:1,
    justifyContent:'flex-end'
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
});
