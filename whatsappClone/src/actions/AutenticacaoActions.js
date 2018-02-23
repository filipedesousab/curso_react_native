import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const modificaEmail = (texto) => {
  console.log('AudenticacaoAction - modificaEmail');
  console.log(texto);
  return {
    type: 'modifica_email',
    payload: texto
  }
}

export const modificaSenha = (texto) => {
  console.log('AudenticacaoAction - modificaSenha');
  console.log(texto);
  return {
    type: 'modifica_senha',
    payload: texto
  }
}

export const modificaNome = (texto) => {
  console.log('AudenticacaoAction - modificaNome');
  console.log(texto);
  return {
    type: 'modifica_nome',
    payload: texto
  }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(user => cadastroUsuarioSucesso(dispatch) )
      .catch(erro => cadastraUsuarioErro(erro, dispatch));
  }
};

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ( { type: 'cadastro_usuario_sucesso' } );

  Actions.boasVindas();
}

const cadastraUsuarioErro = (erro, dispatch) => {
  dispatch ( { type: 'cadastro_usuario_erro', payload: erro.message } );
  // The email address is badly formatted.
  // O endereço de e-mail está mal formatado.
  // auth/invalid-email

  // The email address is already in use by another account.
  // O endereço de e-mail já está sendo usado por outra conta.
  // auth/email-already-in-use

  // The password must be 6 characters long or more.
  // A senha deve ter 6 caracteres ou mais.
  // auth/weak-password

  // Password should be at least 6 characters
  // A senha deve ter pelo menos 6 caracteres
  // auth/weak-password

  // A network error (such as timeout, interrupted connection or unreachable host) has occurred.
  // Ocorreu um erro de rede (como tempo limite, conexão interrompida ou host inacessível).
  // network-request-failed
}
