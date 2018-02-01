// Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

// Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#085098',
    height: 60,
    width: 60
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
// Criar componente
const App = () => {

  const { estiloTexto, estiloView } = Estilos;

  return (
    <View style={ estiloView }>
      <Text style={ estiloTexto }>A</Text>
    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
