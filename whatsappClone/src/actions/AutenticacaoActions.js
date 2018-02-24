import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import base64 from 'base-64';

import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO
} from './types';

export const modificaEmail = (texto) => {
  console.log('AudenticacaoAction - modificaEmail');
  console.log(texto);
  return {
    type: MODIFICA_EMAIL,
    payload: texto
  }
}

export const modificaSenha = (texto) => {
  console.log('AudenticacaoAction - modificaSenha');
  console.log(texto);
  return {
    type: MODIFICA_SENHA,
    payload: texto
  }
}

export const modificaNome = (texto) => {
  console.log('AudenticacaoAction - modificaNome');
  console.log(texto);
  return {
    type: MODIFICA_NOME,
    payload: texto
  }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email.trim(), senha)
      .then(user => {
        let emailB64 = base64.encode(email);

        firebase.database().ref(`/contatos/${emailB64}`)
          .push({ nome })
          .then(value => cadastroUsuarioSucesso(dispatch));

      } )
      .catch(erro => cadastraUsuarioErro(erro, dispatch));
  }
};

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ( { type: CADASTRO_USUARIO_SUCESSO } );

  Actions.boasVindas();
}

const cadastraUsuarioErro = (erro, dispatch) => {
  dispatch ( { type: CADASTRO_USUARIO_ERRO, payload: erro.message } );
}

export const autendicarUsuario = ({ email, senha }) => {

  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email.trim(), senha)
      .then(value => loginUsuarioSucesso(dispatch))
      .catch(erro => loginUsuarioErro(erro, dispatch));
  }

  return {
    type: 'teste'
  };
}

loginUsuarioSucesso = dispatch => {
  dispatch ( { type: LOGIN_USUARIO_SUCESSO } );

  Actions.principal();
}

loginUsuarioErro = (erro, dispatch) => {
  dispatch ({ type: LOGIN_USUARIO_ERRO, payload: erro.message });
}

// ERROS A SEREM TRATADOS

// ERRO PARA CADASTRO
// The email address is already in use by another account.
// O endereço de e-mail já está sendo usado por outra conta.
// auth/email-already-in-use

// ERRO PARA LOGIN
// There is no user record corresponding to this identifier. The user may have been deleted.
// Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.
// auth/user-not-found

// ERROS PARA CADASTRO E LOGIN
// The email address is badly formatted.
// O endereço de e-mail está mal formatado.
// auth/invalid-email

// The password must be 6 characters long or more.
// A senha deve ter 6 caracteres ou mais.
// auth/weak-password

// Password should be at least 6 characters
// A senha deve ter pelo menos 6 caracteres
// auth/weak-password

// A network error (such as timeout, interrupted connection or unreachable host) has occurred.
// Ocorreu um erro de rede (como tempo limite, conexão interrompida ou host inacessível).
// network-request-failed
