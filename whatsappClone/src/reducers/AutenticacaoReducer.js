const INITIAL_STATE = {
  nome: 'Filipe',
  email: 'filipe@f',
  senha: '123'
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
  }

  return state;
}
