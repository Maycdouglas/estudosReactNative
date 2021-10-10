import { StatusBar } from 'expo-status-bar';
import React from 'react';
import App2 from './App2';
import ComponenteComPropriedades from './fundamentos/componenteComPropriedades';
import { SafeAreaViewComponent, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponenteComPropriedades/>
      <Text>Olá mundo!</Text>
      <StatusBar style="auto" />
      <App2/>
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
});
