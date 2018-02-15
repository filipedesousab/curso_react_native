import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});

export default class BarraNavegacao extends Component {
  render() {
    if(this.props.voltar) {
      return (
        <View style={styles.barraTitulo}>
          <Image source={require('../imgs/btn_voltar.png')} />
          <Text style={styles.titulo}>ATM Consultoria</Text>
        </View>
      );
    }
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}
