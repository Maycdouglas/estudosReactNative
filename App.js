import { StatusBar } from 'expo-status-bar';
import React from 'react';
import App2 from './src/App2';
import Aleatorio from './src/desafios/Aleatorio';
import ComponenteComPropriedades from './src/fundamentos/ComponenteComPropriedades';
import ReactFragment from './src/fundamentos/ReactFragment';
import Botao from './src/fundamentos/Botao';
import Estado from './src/fundamentos/Estado';
import PaiDireto from './src/fundamentos/ComunicacaoDireta/PaiDireto';
import PaiIndireto from './src/fundamentos/ComunicacaoIndireta/PaiIndireto';
import Plataforma from './src/fundamentos/Plataforma';
import { SafeAreaViewComponent, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponenteComPropriedades prop1 = "20" prop2 = "23"/>
      <Text>Olá mundo!</Text>
      <StatusBar style="auto" />
      <App2/>
      <Text>O número aleatório é: <Aleatorio min={50} max={30}/> </Text>
      <ReactFragment principal="Principal" secundario="Secundário"></ReactFragment>
      <Botao/>
      <Estado valor={1}/>
      <PaiDireto a={10}/>
      <PaiIndireto/>
      <Plataforma/>
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
