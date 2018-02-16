import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>

        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>

        <View style={styles.rodape}>
          <Image source={btnSobreJogo} />
          <Image source={btnOutrosJogos} />
        </View>

      </View>
    );
  }
}
