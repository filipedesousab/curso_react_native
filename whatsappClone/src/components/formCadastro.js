import React, { Component } from 'react';
import { Button, Image, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

  _cadastraUsuario() {
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({ nome, email, senha });
  }

  render() {
    return (
      <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>

          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
              style={{ fontSize: 20, height: 45 }}
              placeholder='Nome'
              placeholderTextColor='#fff'
              editable={true}
              value={this.props.nome}
              onChangeText={ texto => this.props.modificaNome(texto) }
            />
            <TextInput
              style={{ fontSize: 20, height: 45 }}
              placeholder='E-mail'
              placeholderTextColor='#fff'
              editable={true}
              value={this.props.email}
              onChangeText={ texto => this.props.modificaEmail(texto) }
            />
            <TextInput
              style={{ fontSize: 20, height: 45 }}
              placeholder='Senha'
              placeholderTextColor='#fff'
              editable={true}
              secureTextEntry={true}
              value={this.props.senha}
              onChangeText={ texto => this.props.modificaSenha(texto) }
            />
          </View>

          <View style={{ flex: 1 }}>
            <Button
              color='#115E54'
              title='Cadastrar'
              onPress={ () => { this._cadastraUsuario() } }
            />
          </View>

        </View>
      </Image>
    );
  }
}

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
  }
)(formCadastro);
