import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Rotas from './src/rotas';

export default class cara_ou_coroa extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('cara_ou_coroa', () => cara_ou_coroa);
