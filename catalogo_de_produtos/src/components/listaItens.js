import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Itens from './itens';

export default class listaItens extends Component {
  render() {
    return (
      <View>
        <Itens />
        <Itens />
        <Itens />
      </View>
    );
  }
}
