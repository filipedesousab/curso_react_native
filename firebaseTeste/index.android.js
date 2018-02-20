import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

export default class firebaseTeste extends Component {

  constructor(props) {
    super(props);
    this.state = { pontuacao: 0 };
  }
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyB_0Pa8QhqYChncABCi4NZcLbSYQJ4Y1bQ",
      authDomain: "configuracaofirebasereact2107.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereact2107.firebaseio.com",
      projectId: "configuracaofirebasereact2107",
      storageBucket: "configuracaofirebasereact2107.appspot.com",
      messagingSenderId: "953986329042"
    };

    firebase.initializeApp(config);
  }

  salvarDados() {
    let funcionarios = firebase.database().ref('funcionarios');
    // database.ref('pontuacao').remove();

    funcionarios.push().child('nome').set(
      {
        nome: 'Mariana SIlva',
        altura: '1,65',
        peso: '60KG'
      }
    );
    // funcionarios.remove();

  }

  listarDados() {
    let pontuacao = firebase.database().ref('pontuacao');

    pontuacao.on('value', snapshot => {
      let pontos = snapshot.val();
      this.setState({ pontuacao: pontos });
    });
  }

  render() {

    let {pontuacao} = this.state;
    
    return (
      <View>
        <Button
          title="Salvar Dados"
          onPress={ () => { this.salvarDados() } }
        />
        <Button
          title="Listar Dados"
          onPress={ () => { this.listarDados() } }
        />
        <Text>
          {pontuacao}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => firebaseTeste);
