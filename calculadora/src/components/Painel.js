import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component{

	constructor(props) {
		super(props);

		this.state = { num1: '12', num2: '12', operacao: 'soma' };

		this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacao = this.atualizaOperacao.bind(this);
	}

	calcular() {
		let resultado = 0;
		if (this.state.operacao === 'soma') {
			resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
		} else if (this.state.operacao === 'subtracao') {
			resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
		} else {
			resultado = 0;
		}
		console.log(resultado);
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
		  	<Entrada
					num1={this.state.num1}
					num2={this.state.num2}
					atualizaValor={this.atualizaValor}
				/>
				<Operacao operacao={this.state.operacao} acao={this.atualizaOperacao} />
				<Comando acao={this.calcular} />
		  </View>
		);
	}
}

export { Painel };
