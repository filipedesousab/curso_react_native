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
  estiloTexto2: {
    fontSize: 40,
    backgroundColor: '#2A48FA',
    height: 60,
    width: 60
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  }
};
// Criar componente
const App = () => {

  const { estiloTexto, estiloTexto2, estiloView } = Estilos;

  return (
    <View style={ estiloView }>
      <Text style={ estiloTexto }>A</Text>
      <Text style={ estiloTexto2 }>B</Text>
      <Text style={ estiloTexto }>C</Text>
    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
