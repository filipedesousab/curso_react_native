import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
	Text,
  View
} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Resultado extends Component {
  render() {
    return (
      <View style={styles.resultado}>
        <Image source={cara} />
        <Image source={coroa} />
      </View>
    )
  }
};
