import React from 'react';
import {
	StyleSheet,
	TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  numero: {
    height: 80,
    fontSize: 20,
    flex: 1,
    margin: 5
  }
});

export default props => (
  <TextInput
    placeholder=''
    editable={true}
    style={styles.numero}
  />
);
