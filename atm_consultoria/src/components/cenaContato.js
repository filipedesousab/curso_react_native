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
		color: '#61BD8C',
		fontSize: 25
	},
	detalheContato: {
		padding: 20
	},
	txtDetalheContato: {
		fontSize: 18,
	}
});

const detalheContato = require('../imgs/detalhe_contato.png');

export default class CenaContato extends Component {
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
	            <Image source={detalheContato} />
							<Text style={styles.txtCabecalho}>Contatos</Text>
						</View>

						<View style={styles.detalheContato}>
							<Text style={styles.txtDetalheContato}>TEL: (81)3333-3333</Text>
							<Text style={styles.txtDetalheContato}>CEL: (81)99999-9999</Text>
							<Text style={styles.txtDetalheContato}>EMAIL: contato@atmconsultoria.com</Text>
						</View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
