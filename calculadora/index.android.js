import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import App from './src/App';

const calculadora = () => (
  <App />
)

AppRegistry.registerComponent('calculadora', () => calculadora);
