import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/cenaPrincipal';
import CenaClientes from './src/components/cenaClientes';
import CenaContato from './src/components/cenaContato';

class atm_consultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id:'a' }}
        renderScene={(route, navigator) => {
          // Definir a cena com base na rota
          if(route.id === 'a') {
            // Exibir a cena principal
            return ( <CenaPrincipal navigator={navigator} /> )
          }else if(route.id === 'b') {
            // Exibir a cena clientes
            return ( <CenaClientes navigator={navigator} /> )
          }else if(route.id === 'c') {
            // Exibir a cena clientes
            return ( <CenaContato navigator={navigator} /> )
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
