import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class catalogo_de_produtos extends Component {
  constructor(props) {
    super(props);
    console.log('Construindo a aplicação');
  }

  componentWillMount() {
    console.log('Fazer alguma coisa antes de renderizar');
  }

  componentDidMount() {
    console.log('Fazer alguma coisa depois da renderização');
    console.log(console);
  }

  render() {
    console.log('Objeto é renderizado');
    return (
      <Text>Testando importação do componente</Text>
    );
  }
}
