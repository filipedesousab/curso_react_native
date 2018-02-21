import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default props => (
  <View style={{ flex: 1, padding: 10 }}>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>Whatsapp Clone</Text>
    </View>

    <View style={{ flex: 2 }}>
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
      <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se</Text>
    </View>

    <View style={{ flex: 1 }}>
      <Button
        color='#115E54'
        title='Acessar'
        onPress={ () => {  } }
      />
    </View>

  </View>
);
