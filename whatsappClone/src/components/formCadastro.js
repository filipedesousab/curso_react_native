import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

const formCadastro = props => (
  <View style={{ flex: 1, padding: 10 }}>

    <View style={{ flex: 4, justifyContent: 'center' }}>
      <TextInput
        style={{ fontSize: 20, height: 45 }}
        placeholder='Nome'
        editable={true}
        value={props.nome}
        onChangeText={ () => {  } }
      />
      <TextInput
        style={{ fontSize: 20, height: 45 }}
        placeholder='E-mail'
        editable={true}
        value={props.email}
        onChangeText={ () => {  } }
      />
      <TextInput
        style={{ fontSize: 20, height: 45 }}
        placeholder='Senha'
        editable={true}
        value={props.senha}
        onChangeText={ () => {  } }
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
);

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, null)(formCadastro);
