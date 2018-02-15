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
		color: '#EC7148',
		fontSize: 25
	},
	detalheEmpresa: {
		padding: 20
	},
	txtDetalheEmpresa: {
		fontSize: 18,
	}
});

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <StatusBar
          backgroundColor='#B9C941'
        />

				<BarraNavegacao voltar navigator={this.props.navigator}/>

        <ScrollView>
          <View style={styles.principal}>

						<View style={styles.cabecalho}>
	            <Image source={detalheEmpresa} />
							<Text style={styles.txtCabecalho}>A empresa</Text>
						</View>

						<View style={styles.detalheEmpresa}>
							<Text style={styles.txtDetalheContato}>
								A ATM Consultoria está no mercado a mais de 20 anos...
							</Text>
						</View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
