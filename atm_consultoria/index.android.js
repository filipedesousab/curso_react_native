import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BarraNavegacao from './src/components/barraNavegacao';

export default class atm_consultoria extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
