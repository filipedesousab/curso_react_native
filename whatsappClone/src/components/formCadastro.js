import React from 'react';
import { Button, View, TextInput } from 'react-native';

export default props => (
  <View style={{ flex: 1, padding: 10 }}>

    <View style={{ flex: 4, justifyContent: 'center' }}>
      <TextInput
        style={{ fontSize: 20, height: 45 }}
        placeholder='Nome'
        editable={true}
        value=''
        onChangeText={ () => {  } }
      />
      <TextInput
        style={{ fontSize: 20, height: 45 }}
        placeholder='E-mail'
        editable={true}
        value=''
        onChangeText={ () => {  } }
      />
      <TextInput
        style={{ fontSize: 20, height: 45 }}
        placeholder='Senha'
        editable={true}
        value=''
        onChangeText={ () => {  } }
      />
    </View>

    <View style={{ flex: 1 }}>
      <Button
        color='#115E54'
        title='Cadastrar'
        onPress={ () => {  } }
      />
    </View>

  </View>
);
