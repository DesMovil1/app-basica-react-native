import { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

export const Calcular = ({ operacion, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    if (operacion) {
      try {
        setResultado(eval(operacion).toString());
        setVisible(true);
      } catch (error) {
        setResultado('Error en la operación');
        setVisible(true);
      }
    }
  }, [operacion]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Resultado:</Text>
          <Text style={styles.resultado}>{resultado}</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={handleClose}>
            <Text style={styles.textStyle}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      margin: 15,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 50,
      alignItems: 'center',
      shadowOffset: {
        width: 10,
        height: 15,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      marginTop:20,
      borderRadius: 15,
      padding: 13,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: 'red',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize:15,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize:25,
      fontWeight:'bold'
    },
    resultado: {
      fontSize: 25,
      marginBottom: 15,
    },
  });