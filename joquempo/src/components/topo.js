import React, { Component } from 'react';
import {
  Image,
  View,
} from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={imagem} />
      </View>
    );
  }
}

export default Topo;
