import React, { Component } from 'react';
import {
  View
} from 'react-native';
import axios from 'axios';

import Itens from './itens';

export default class listaItens extends Component {

  componentWillMount() {
    // Requisiçã HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => { console.log(response.data); })
      .catch((err) => { console.log('Erro ao recuperar os dados'); });
  }

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
