import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/listaItens';

class catalogo_de_produtos extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('catalogo_de_produtos', () => catalogo_de_produtos);
