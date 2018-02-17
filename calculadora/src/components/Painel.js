import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = props => (
  <View>
  	<Entrada />
		<Operacao />
		<Comando />
  </View>
);

export { Painel };
