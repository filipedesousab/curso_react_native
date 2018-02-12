import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    flex: 1,
  },
  txtJogador: {
    fontSize: 18,
  },
});

class Icone extends Component {
  render() {
    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={pedra} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={papel} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={tesoura} />
        </View>
      );
    }
    return false;
  }
}

Icone.propTypes = {
  escolha: PropTypes.string.isRequired,
  jogador: PropTypes.string.isRequired,
};

export default Icone;
