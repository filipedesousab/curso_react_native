import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

import styles from './src/styles/styles';

class joquempo extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  joquempo(escolhaUsuario) {
    // Gerar número aleatório
    const numAleatorio = Math.floor(Math.random() * 3);

    const escolhaComputador = ['pedra', 'papel', 'tesoura'];

    let resultado = '';

    if (escolhaComputador[numAleatorio] === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Você ganhou';
      } else {
        resultado = 'Você perdeu';
      }
    } else if (escolhaComputador[numAleatorio] === 'papel') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você perdeu';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      } else {
        resultado = 'Você ganhou';
      }
    } else if (escolhaUsuario === 'pedra') {
      resultado = 'Você ganhou';
    } else if (escolhaUsuario === 'papel') {
      resultado = 'Você perdeu';
    } else {
      resultado = 'Empate';
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador: escolhaComputador[numAleatorio],
      resultado,
    });
  }

  render() {
    return (
      <View style={styles.principal}>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button
              title="pedra"
              onPress={() => { this.joquempo('pedra'); }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={() => { this.joquempo('papel'); }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={() => { this.joquempo('tesoura'); }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{ this.state.resultado }</Text>
          <View style={styles.icones}>
            <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
            <Icone escolha={this.state.escolhaUsuario} jogador="Usuário" />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('joquempo', () => joquempo);
