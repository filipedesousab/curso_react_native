import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/principal';
import SobreJogo from './components/sobreJogo';
import OutrosJogos from './components/outrosJogos';
import Resultado from './components/resultado';

const Rotas = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='principal' component={Principal} title="Cara ou Coroa" initil />
    <Scene key='sobreJogo' component={SobreJogo} title="Sobre o Jogo" />
    <Scene key='outrosJogos' component={OutrosJogos} title="Outros Jogos" />
    <Scene key='resultado' component={Resultado} title="Resultado" />
  </Router>
)

export default Rotas;
