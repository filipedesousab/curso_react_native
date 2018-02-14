import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';

import Itens from './itens';

export default class listaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { listaItens: [] }
  }

  componentWillMount() {
    // Requisiçã HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => { this.setState({ listaItens: response.data }); })
      .catch((err) => { console.log('Erro ao recuperar os dados'); console.log(err); });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD'}}>
        { this.state.listaItens.map((item) => (<Itens key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}
