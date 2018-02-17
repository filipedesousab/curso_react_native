import React from 'react';
import {
	Picker,
	StyleSheet
} from 'react-native';


export default props => (
  <Picker style={styles.operacao}>
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

const styles = StyleSheet.create({
	operacao: {
		marginVertical: 15
	}
});
