// Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

// Formatações
const Estilos = {
  principal: {
    flex: 1, // 1:1
    backgroundColor: 'cornflowerblue',
  },
  topo: {
    flex: 1,  // 1:5
    backgroundColor: 'brown',
  },
  conteudo: {
    flex: 3, // 3:5
    backgroundColor: 'yellowgreen',
  },
  rodape: {
    flex: 1, // 2:5
    backgroundColor: 'orangered',
  }
};
// Criar componente
const App = () => {

  const { principal, topo, conteudo, rodape } = Estilos;

  return (
    <View style={ principal }>
      <Text style={ topo }>Topo</Text>
      <Text style={ conteudo }>Conteúdo</Text>
      <Text style={ rodape }>Rodapé</Text>
    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
