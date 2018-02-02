import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component {
  render () {
    return (
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.xyz}</Text>
      </View>
    )
  }
}

class joquempo extends Component {
  render() {
    return (
      <MeuComponente propriedade1='Banana' xyz='abacaxi' p='uva' >
      </MeuComponente>
    );
  }
}

AppRegistry.registerComponent('joquempo', () => joquempo);
