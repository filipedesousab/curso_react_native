// Import
import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

// Formatações
const Estilos = {
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#4888EC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 3,
    borderRadius: 1
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

const botaoPressionado = () => {
  alert('Botão pressionado')
}
// Criar componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={ principal }>
      <TouchableOpacity
        style={ botao }
        onPress={ botaoPressionado }
        accessibilityLabel="Clique para abrir as notícias!"
      >
        <Text style={ textoBotao }>Clique Aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
