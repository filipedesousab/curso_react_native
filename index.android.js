var React = require('react');
var Text = require('react-native').Text;
var Button = require('react-native').Button;
var View = require('react-native').View;
var AppRegistry = require('react-native').AppRegistry;

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
