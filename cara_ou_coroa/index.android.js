import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/principal';
import SobreJogo from './src/components/sobreJogo';
import OutrosJogos from './src/components/outrosJogos';
import Resultado from './src/components/resultado';

export default class cara_ou_coroa extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='principal' component={Principal} title="Cara ou Coroa" initil />
        <Scene key='sobreJogo' component={SobreJogo} title="Sobre o Jogo" />
        <Scene key='outrosJogos' component={OutrosJogos} title="Outros Jogos" />
        <Scene key='resultado' component={Resultado} title="Resultado" />
      </Router>
    );
  }
}

AppRegistry.registerComponent('cara_ou_coroa', () => cara_ou_coroa);
