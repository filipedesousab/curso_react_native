import React from 'react';
import {
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/formLogin';
import FormCadastro from './components/formCadastro';
import BoasVindas from './components/boasVindas';
import Principal from './components/principal';

export default props => (
  <Router sceneStyle={{ paddingTop: 0 }} navigationBarStyle={{ backgroundColor: '#115E54'}} titleStyle={{ color: '#fff'}}>
    <Scene key='login' component={FormLogin} title="Login" hideNavBar />
    <Scene key='cadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} />
    <Scene key='boasVindas' component={BoasVindas} title="Bem Vindo" hideNavBar />
    <Scene key='principal' component={Principal} title="Principal" hideNavBar initial/>
  </Router>
);
