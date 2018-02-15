import React, { Component } from 'react';
import {
	Image,
  ScrollView,
  StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native';

import BarraNavegacao from './barraNavegacao';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
	cabecalho: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15
	},
	txtCabecalho: {
		color: '#B9C941',
		fontSize: 25
	},
	detalheClientes: {
		marginVertical: 10,
		marginHorizontal: 20
	},
	txtDetalheClientes: {
		fontSize: 18,
		marginLeft: 20
	}
});

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <StatusBar
          backgroundColor='#B9C941'
        />
        <BarraNavegacao voltar />
        <ScrollView>
          <View style={styles.principal}>

						<View style={styles.detalheClientes}>
	            <Image source={detalheClientes} />
							<Text style={styles.txtCabecalho}>Nossos Clientes</Text>
						</View>

						<View style={styles.detalheClientes}>
							<Image source={cliente1} />
							<Text style={styles.txtDetalheClientes}>Lorem ipsum dolorem...</Text>
						</View>

						<View style={styles.detalheClientes}>
							<Image source={cliente2} />
							<Text style={styles.txtDetalheClientes}>Lorem ipsum dolorem...</Text>
						</View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
