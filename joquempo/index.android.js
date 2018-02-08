import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class MeuComponente extends Component {
  render () {
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    )
  }
}

class joquempo extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: ''}
  }

  joquempo( escolhaUsuario ){
    // Gerar número aleatório
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = Array('pedra', 'papel', 'tesoura');

    var resultado= '';

    if(escolhaComputador[numAleatorio] == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }else if(escolhaUsuario == 'papel'){
        resultado = 'Usuário ganhou';
      }else{
        resultado = 'Computador ganhou';
      }
    }else if(escolhaComputador[numAleatorio] == 'papel'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador ganhou';
      }else if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }else{
        resultado = 'Usuário ganhou';
      }
    }else{
      if(escolhaUsuario == 'pedra'){
        resultado = 'Usuário ganhou';
      }else if(escolhaUsuario == 'papel'){
        resultado = 'Computador ganhou';
      }else{
        resultado = 'Empate';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador[numAleatorio],
      resultado: resultado
    })
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
          <Button
            title="pedra"
            onPress={ () => { this.joquempo('pedra') } }
          />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={ () => { this.joquempo('papel') } }
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={ () => { this.joquempo('tesoura') } }
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{ this.state.resultado }</Text>

          <Text>Escolha do computador: { this.state.escolhaComputador }</Text>
          <Image source={require(`./imgs/pedra.png`)} />
          <Text>Excolha do usuário: { this.state.escolhaUsuario }</Text>
          <Image source={require(`./imgs/papel.png`)} />
        </View>
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  palco: {
    alignItems: 'center',
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 40,
  }
});

AppRegistry.registerComponent('joquempo', () => joquempo);
