const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log('AutenticacaoReducer');
  console.log(action);

  if (action.type === 'modifica_email') {
    return { ...state, email: action.payload };
  } else if (action.type === 'modifica_senha') {
    return { ...state, senha: action.payload };
  } else if (action.type === 'modifica_nome') {
    return { ...state, nome: action.payload };
  } else if (action.type === 'cadastro_usuario_erro') {
    return { ...state, erroCadastro: action.payload };
  }

  return state;
}
