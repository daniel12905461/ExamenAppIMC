import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/component/index';
import TableAux from './src/component/tableAux';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Indice de Masa Corporal</Text>
      <StatusBar style="auto" />
      <Index/>
      <Text style={styles.Text}>Interpretación del IMC para adultos:</Text>
      <TableAux/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40
  },
  Text: {
    fontSize: 15,
    fontWeight: "bold",
  }
});
