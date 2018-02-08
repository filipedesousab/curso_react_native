import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class MeuComponente extends Component {
  render () {
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    )
  }
}

class joquempo extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: ''}
  }

  joquempo( escolhaUsuario ){
    // Gerar número aleatório
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = Array('pedra', 'papel', 'tesoura');

    var resultado= '';

    if(escolhaComputador[numAleatorio] == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }else if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou';
      }else{
        resultado = 'Você perdeu';
      }
    }else if(escolhaComputador[numAleatorio] == 'papel'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você perdeu';
      }else if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }else{
        resultado = 'Você ganhou';
      }
    }else{
      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }else if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu';
      }else{
        resultado = 'Empate';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador[numAleatorio],
      resultado: resultado
    })
  }

  render() {
    return (
      <View style={styles.principal}>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
          <Button
            title="pedra"
            onPress={ () => { this.joquempo('pedra') } }
          />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={ () => { this.joquempo('papel') } }
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={ () => { this.joquempo('tesoura') } }
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{ this.state.resultado }</Text>
          <View style={styles.icones}>
              <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
              <Icone escolha={this.state.escolhaUsuario} jogador='Usuário' />
          </View>
        </View>
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    )
  }
}

class Icone extends Component {
  render() {
    if(this.props.escolha == 'pedra'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require(`./imgs/pedra.png`)} />
        </View>
      )
    }else if(this.props.escolha == 'papel'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require(`./imgs/papel.png`)} />
        </View>
      )
    }else if(this.props.escolha == 'tesoura'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require(`./imgs/tesoura.png`)} />
        </View>
      )
    }else{
      return false;
    }

  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1
  },
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  palco: {
    alignItems: 'center',
    backgroundColor: 'rgb(195, 216, 249)',
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 40,
  },
  icones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icone: {
    alignItems: 'center',
    flex: 1
  },
  txtJogador: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('joquempo', () => joquempo);
