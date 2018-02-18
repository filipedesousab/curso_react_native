import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { resultado: '' };

    this.calcular = this.calcular.bind(this);
  }

  calcular(num1, num2, operacao) {
    let resultado = 0;
    if (operacao === 'soma') {
      resultado = parseFloat(num1) + parseFloat(num2);
    } else if (operacao === 'subtracao') {
      resultado = parseFloat(num1) - parseFloat(num2);
    } else {
      resultado = 0;
    }

    this.setState({ resultado: String(resultado) });;
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel calcular={this.calcular}/>
      </View>
    )
  }
}
