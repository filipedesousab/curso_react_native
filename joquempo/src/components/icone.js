import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';

class Icone extends Component {
  render() {
    if(this.props.escolha == 'pedra'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require(`../../imgs/pedra.png`)} />
        </View>
      )
    }else if(this.props.escolha == 'papel'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require(`../../imgs/papel.png`)} />
        </View>
      )
    }else if(this.props.escolha == 'tesoura'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{ this.props.jogador }</Text>
          <Image source={require(`../../imgs/tesoura.png`)} />
        </View>
      )
    }else{
      return false;
    }
  }
}

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    flex: 1
  },
  txtJogador: {
    fontSize: 18
  }
});

export default Icone;
