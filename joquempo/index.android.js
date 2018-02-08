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
        <View>

        </View>
        <Text>Escolha do computador: { this.state.escolhaComputador }</Text>
        <Text>Excolha do usuário: { this.state.escolhaUsuario }</Text>
        <Text>Resultado { this.state.resultado }</Text>
        <Button
          title="pedra"
          onPress={ () => { this.joquempo('pedra') } }
        />
        <Button
          title="papel"
          onPress={ () => { this.joquempo('papel') } }
        />
        <Button
          title="tesoura"
          onPress={ () => { this.joquempo('tesoura') } }
        />
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

AppRegistry.registerComponent('joquempo', () => joquempo);
