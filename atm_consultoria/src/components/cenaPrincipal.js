import React, { Component } from 'react';
import {
	Button,
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
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row',
  },
  itemMenu: {
    margin: 15
  }
});

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <StatusBar
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
        <ScrollView>
          <View style={styles.principal}>
            <View style={styles.logo}>
              <Image source={logo} />
            </View>
            <View style={styles.menu}>
              <View style={styles.menuGrupo}>
                <Image style={styles.itemMenu} source={menuCliente} />
                <Image style={styles.itemMenu} source={menuContato} />
              </View>
              <View style={styles.menuGrupo}>
                <Image style={styles.itemMenu} source={menuEmpresa} />
                <Image style={styles.itemMenu} source={menuServico} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
