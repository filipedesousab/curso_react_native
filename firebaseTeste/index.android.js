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

  cadastrarUsuario() {
    let email = 'filipedesousab@gmail.com';
    let senha = 'filipe12345';

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      erro => {
        // erro.code, erro.message
        let mensagemErro = '';

        if (erro.code == 'auth/weak-password') {
          mensagemErro = 'A senha precisa ter no minimo 6 caracteres';
        } else {
          mensagemErro = erro.code;
        }
        alert( mensagemErro );
      }
    )
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();

    usuario.onAuthStateChanged(
      usuarioAtual => {
        if (usuarioAtual) {
          alert('Usuário está logado');
        } else {
          alert('Usuário não está logado');
        }
      }
    )
    
    /*const usuarioAtual = usuario.currentUser;

    if (usuarioAtual) {
      alert('Usuário está logado');
    } else {
      alert('Usuário não está logado');
    }*/
  }

  render() {

    return (
      <View>
        <Button
          title="Cadastrar Usuário"
          onPress={ () => { this.cadastrarUsuario() } }
        />
        <Button
          title="Verificar Usuário logado"
          onPress={ () => { this.verificarUsuarioLogado() } }
        />
        <Text>
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => firebaseTeste);
