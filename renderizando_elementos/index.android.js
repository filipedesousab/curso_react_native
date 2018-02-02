// Import
import React from 'react';
import { Text, AppRegistry, View, Image } from 'react-native';

// Formatações
const Estilos = {
  principal: {
    paddingTop: 40
  },
  imagem: {
    justifyContent: 'flex-end',
    padding: 5
  }
}

const botaoPressionado = () => {
  alert('Botão pressionado')
}
// Criar componente
const App = () => {

  const { principal, imagem } = Estilos;

  return (
    <View style={ principal }>
      <Image style={ imagem } source={ require('./imgs/uvas.png') }>
        <Text style={{backgroundColor: '#fff'}}>Legenda da foto</Text>
      </Image>
    </View>
  );
};

// Renderizar para o dispositivo
AppRegistry.registerComponent('renderizando_elementos', () => App);
