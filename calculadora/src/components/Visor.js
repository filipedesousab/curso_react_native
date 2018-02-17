import React, { Component } from 'react';
import {
	StyleSheet,
  TextInput,
	View
} from 'react-native';

const styles = StyleSheet.create({
  visor: {
    height: 100,
    fontSize: 30
  }
});

export default props => (
  <View>
    <TextInput
      placeholder='Resultado'
      editable={false}
      style={styles.visor}
    />
  </View>
);
