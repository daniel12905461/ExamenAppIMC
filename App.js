import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/component/index';
import { Table, Row, Rows } from 'react-native-table-component';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Indice de Masa Corporal</Text>
      <StatusBar style="auto" />
      <Index/>
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
  }
});
