// Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#085098',
    paddingTop: 15,
    elevation: 10,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: '900',
    textAlign: 'center',
    textDecorationLine: 'underline line-through'
  }
};
// Criar componente
const App = () => {
  return (
    <Text style={ Estilos.estiloTexto }>Frases do dia</Text>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
