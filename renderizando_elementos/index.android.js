// Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 50
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
