import React, { Component } from 'react';
import {
	Picker,
	StyleSheet
} from 'react-native';


export default class Operacao extends Component {
	render(){
		return (
			<Picker
				style={styles.operacao}
				selectedValue={this.props.operacao}
				onValueChange={operacao => { this.props.acao(operacao); }}
			>
			  <Picker.Item
					label='Soma'
					value='soma'
				/>
				<Picker.Item
					label='Subtração'
					value='subtracao'
				/>
			</Picker>
		);
	}
}

const styles = StyleSheet.create({
	operacao: {
		marginVertical: 15
	}
});
