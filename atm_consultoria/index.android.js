import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/cenaPrincipal';
import CenaClientes from './src/components/cenaClientes';
import CenaContato from './src/components/cenaContato';
import CenaEmpresa from './src/components/cenaEmpresa';
import CenaServico from './src/components/cenaServico';

class atm_consultoria extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          // Definir a cena com base na rota
          switch (route.id) {
            case 'principal':
              // Exibir a cena principal
              return (<CenaPrincipal navigator={navigator} />);
            case 'clientes':
              // Exibir a cena clientes
              return (<CenaClientes navigator={navigator} />);
            case 'contato':
              // Exibir a cena contato
              return (<CenaContato navigator={navigator} />);
            case 'empresa':
              // Exibir a cena empresa
              return (<CenaEmpresa navigator={navigator} />);
            case 'servico':
              // Exibir a cena clientes
              return (<CenaServico navigator={navigator} />);
            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('atm_consultoria', () => atm_consultoria);
