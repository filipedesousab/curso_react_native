import React from 'react';
import {
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/formLogin';
import FormCadastro from './components/formCadastro';
import BoasVindas from './components/boasVindas';
import Principal from './components/principal';

export default props => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='login' component={FormLogin} title="Login" />
    <Scene key='cadastro' component={FormCadastro} title="Cadastro" />
    <Scene key='boasVindas' component={BoasVindas} title="Bem Vindo"/>
    <Scene key='principal' component={Principal} title="Principal"/>
  </Router>
);
