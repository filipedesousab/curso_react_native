import React from 'react';
import { Button, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha } from '../actions/AutenticacaoAction';

const formLogin = props => {
  return (
    <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
      <View style={{ flex: 1, padding: 10 }}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25 }}>Whatsapp Clone</Text>
        </View>

        <View style={{ flex: 2 }}>
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
          <TouchableHighlight
            onPress={() => {
              Actions.cadastro();
            }}
          >
            <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1 }}>
          <Button
            color='#115E54'
            title='Acessar'
            onPress={ () => {  } }
          />
        </View>

      </View>
    </Image>
  );
}

const mapStateToProps = state => {
console.log('mapStateToProps');
console.log(state);
return(
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)
}

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
