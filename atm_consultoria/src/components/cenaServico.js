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
		color: '#19D1C8',
		fontSize: 25
	},
	detalheServico: {
		padding: 20
	},
	txtDetalheServico: {
		fontSize: 18,
	}
});

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServico extends Component {
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
	            <Image source={detalheServico} />
							<Text style={styles.txtCabecalho}>Nossos Serviços</Text>
						</View>

						<View style={styles.detalheServico}>
							<Text style={styles.txtDetalheServico}>Consultoria</Text>
							<Text style={styles.txtDetalheServico}>Processos</Text>
							<Text style={styles.txtDetalheServico}>Acompanhamento de Projetos</Text>
						</View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
