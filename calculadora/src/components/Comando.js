import React, { Component } from 'react';
import {
	Button,
	StyleSheet
} from 'react-native';

export default props => (
  <Button
  	title="Calcular"
  	onPress={ () => { props.acao(props.num1, props.num2, props.operacao) } }
  />
);
