import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, autendicarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {

  _autendicarUsuario() {
    const { email, senha } = this.props;

    this.props.autendicarUsuario({ email, senha })
  }

  renderBtnAcessar() {

    if (this.props.loading_login) {
      return (
        <ActivityIndicator size='large'/>
      )
    }

    return (
      <Button
        color='#115E54'
        title='Acessar'
        onPress={ () => this._autendicarUsuario() }
      />
    )
  }

  render() {
    return (
      <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, color: '#fff' }}>Whatsapp Clone</Text>
          </View>

          <View style={{ flex: 2 }}>
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
            <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroLogin}</Text>
            <TouchableHighlight
              onPress={() => {
                Actions.cadastro();
              }}
            >
              <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>

          <View style={{ flex: 1 }}>
            {this.renderBtnAcessar()}
          </View>

        </View>
      </Image>
    );
  }
}

const mapStateToProps = state => {
console.log('mapStateToProps');
console.log(state);
return(
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loading_login: state.AutenticacaoReducer.loading_login,
  }
)
}

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autendicarUsuario })(formLogin);
