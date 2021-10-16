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
import RenderizacaoCondicional from './src/fundamentos/RenderizacaoCondicional';
import Familia from './src/fundamentos/PropsChildren/Familia';
import Membro from './src/fundamentos/PropsChildren/Membro';
import UsuarioLogado from './src/fundamentos/RenderizacaoCondicional2/UsuarioLogado'
import ListaProdutos from './src/fundamentos/RenderizacaoLista/ListaProdutos';
import ListaProdutos2 from './src/fundamentos/RenderizacaoLista/ListaProdutos2';
import ComponentesControlados from './src/fundamentos/ComponentesControlados';
import Quadrado from './src/fundamentos/Layout/Quadrado';
import FlexBoxV1 from './src/fundamentos/Layout/FlexBoxV1';
import FlexBoxV2 from './src/fundamentos/Layout/FlexBoxV2';
import FlexBoxV3 from './src/fundamentos/Layout/FlexBoxV3';
import Mega from './src/fundamentos/ComponenteClasse/Mega';



import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ComponenteComPropriedades prop1 = "20" prop2 = "23"/>
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
      <RenderizacaoCondicional num={3}/>
      <Familia>
        <Membro nome="Maycon" sobrenome="Douglas"/>
        <Membro nome="Douglas" sobrenome="Henrique"/>
        <Membro nome="Henrique" sobrenome="Douglas"/>
      </Familia>
      <UsuarioLogado usuario={ {nome:"Maycon", email:"maycon@maycon.com"} }/> 
      <ListaProdutos></ListaProdutos>
      <ListaProdutos2></ListaProdutos2>
      <ComponentesControlados></ComponentesControlados>
      <FlexBoxV1></FlexBoxV1>
      <FlexBoxV2></FlexBoxV2>
      <FlexBoxV3></FlexBoxV3>*/}
      
      
      
      
      <Mega qntd={10}/>
      
  
      
      



    </SafeAreaView>
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
