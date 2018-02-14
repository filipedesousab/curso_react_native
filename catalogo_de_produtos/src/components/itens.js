import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderColor: 'rgb(87, 87, 87)',
    borderWidth: 0.5,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
  },
  foto: {
    height: 102,
    width: 102
  },
  image: {
    height: 100,
    width: 100
  },
  detalhesItem: {
    marginLeft: 10,
    flex: 1
  },
  txtTitulo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  txtValor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtDetalhes: {
    fontSize: 16
  }
});

export default class Itens extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image style={styles.image} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.detalhesItem}>
          <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
          <Text style={styles.txtValor}>R${this.props.item.valor}</Text>
          <Text style={styles.txtDetalhes}>Local: {this.props.item.local_anuncio}</Text>
          <Text>Data publicação: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}
