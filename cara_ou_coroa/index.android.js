import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/principal';
import SobreJogo from './src/components/sobreJogo';
import OutrosJogos from './src/components/outrosJogos';

export default class cara_ou_coroa extends Component {
  render() {
    return (
      <Router>
        <Scene key='principal' component={Principal} initil />
        <Scene key='sobreJogo' component={SobreJogo} />
        <Scene key='outroJogos' component={OutrosJogos} />
      </Router>
    );
  }
}

AppRegistry.registerComponent('cara_ou_coroa', () => cara_ou_coroa);
