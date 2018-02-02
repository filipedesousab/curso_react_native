// Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity } from 'react-native';

// Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
}

const botaoPressionado = () => {

}
// Criar componente
const App = () => {

  const { principal, botao, textoBotao} = Estilos;

  return (
    <View style={ principal }>
      <Image source={ require('./imgs/logo.png') } />
      <TouchableOpacity style={ botao }>
       <Text style={ textoBotao }>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
