import React from 'react';
import { Button, Image, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoAction';

const formCadastro = props => (
  <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
    <View style={{ flex: 1, padding: 10 }}>

      <View style={{ flex: 4, justifyContent: 'center' }}>
        <TextInput
          style={{ fontSize: 20, height: 45 }}
          placeholder='Nome'
          editable={true}
          value={props.nome}
          onChangeText={ texto => props.modificaNome(texto) }
        />
        <TextInput
          style={{ fontSize: 20, height: 45 }}
          placeholder='E-mail'
          editable={true}
          value={props.email}
          onChangeText={ texto => props.modificaEmail(texto) }
        />
        <TextInput
          style={{ fontSize: 20, height: 45 }}
          placeholder='Senha'
          editable={true}
          secureTextEntry={true}
          value={props.senha}
          onChangeText={ texto => props.modificaSenha(texto) }
        />
      </View>

      <View style={{ flex: 1 }}>
        <Button
          color='#115E54'
          title='Cadastrar'
          onPress={ () => {  } }
        />
      </View>

    </View>
  </Image>
);

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(formCadastro);
