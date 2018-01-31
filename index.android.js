var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = function() {
  return (
    <Text>
      Meu Primeiro App
    </Text>
  )
}

AppRegistry.registerComponent('curso_react_native', function(){
  return App
})
