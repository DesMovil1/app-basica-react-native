import { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export const Historial = ({ mostrar, agregar, onClose }) => {
  const [historial, setHistorial] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(mostrar);
  }, [mostrar]);

  useEffect(() => {
    if (agregar) {
      try {
        const resultado = eval(agregar).toString();
        const operacionConResultado = `${agregar} = ${resultado}`;
        setHistorial(prevHistorial => [operacionConResultado, ...prevHistorial]);
      } catch (error) {
        console.error("Error al evaluar la operación:", error);
      }
    }
  }, [agregar]);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Historial de Operaciones</Text>
          <ScrollView>
            {historial.map((item, index) => (
              <Text key={index} style={styles.historyItem}>{item}</Text>
            ))}
          </ScrollView>
          <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={onClose}>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold'
  },
  historyItem: {
    marginTop: 10,
    fontSize: 16
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  button: {
    marginTop: 20,
    borderRadius: 15,
    padding: 13,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
