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

  constructor(props) {
    super(props);

    this.state = { resultado: '' };
  }

  componentWillMount() {
    const numAleatorio = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';

    if (numAleatorio === 0) {
      caraOuCoroa = 'cara';
    } else {
      caraOuCoroa = 'coroa';
    }

    this.setState({ resultado: caraOuCoroa })
  }

  render() {
    if (this.state.resultado === 'cara') {
      return (
        <View style={styles.resultado}>
          <Image source={cara} />
        </View>
      )
    } else {
      return (
        <View style={styles.resultado}>
          <Image source={coroa} />
        </View>
      )
    }
  }
};
