// Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

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

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor( numeroAleatorio * 5 );

  var frases = Array();
  frases[0] = 'Estou sempre alegre. Essa é a melhor maneira...';
  frases[1] = 'O tempo dura bastante para aqueles que...';
  frases[2] = 'Se você encontrar um caminho sem obstáculos...';
  frases[3] = 'Não exite um caminho para a felicidade...';
  frases[4] = 'Você nunca sabe a forca que tem. Até que...';

  fraseEscolhida = frases[numeroAleatorio];
  Alert.alert(fraseEscolhida)
}
// Criar componente
const App = () => {

  const { principal, botao, textoBotao} = Estilos;

  return (
    <View style={ principal }>
      <Image source={ require('./imgs/logo.png') } />
      <TouchableOpacity
        onPress={ gerarNovaFrase }
        style={ botao }
      >
       <Text style={ textoBotao }>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
