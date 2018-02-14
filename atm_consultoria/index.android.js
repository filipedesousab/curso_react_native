import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BarraNavegacao from './src/components/barraNavegacao';

export default class atm_consultoria extends Component {
  render() {
    return (
      <BarraNavegacao />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
