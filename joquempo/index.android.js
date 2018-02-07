import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
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

    this.state = { escolhaUsuario: ''}
  }

  joquempo( escolhaUsuario ){
    this.setState({ escolhaUsuario: escolhaUsuario })
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador</Text>
        <Text>Excolha do usuário: { this.state.escolhaUsuario }</Text>
        <Text>Resultado</Text>
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

AppRegistry.registerComponent('joquempo', () => joquempo);
