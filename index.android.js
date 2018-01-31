var React = require('react');
var { Text, View, Button, AppRegistry } = require('react-native');

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio)
}

const App = () => {
  return (
    <View>
    <Text>Gerador de números randomicos</Text>
    <Button
      title="Gerar um número randônico"
      onPress={geraNumeroAleatorio}
    />
    </View>
  )
}

AppRegistry.registerComponent( 'curso_react_native', () => App )
