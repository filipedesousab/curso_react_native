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
