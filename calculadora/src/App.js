import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { num1: '12', num2: '12', operacao: 'soma', resultado: '' };

    this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacao = this.atualizaOperacao.bind(this);
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

  atualizaOperacao(operacao) {
		this.setState({ operacao });
	}

	atualizaValor(nomeCampo, valor) {
		const obj = {};
		obj[nomeCampo] = valor;

		this.setState(obj);
	}

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaValor={this.atualizaValor}
          atualizaOperacao={this.atualizaOperacao}
        />
      </View>
    )
  }
}
