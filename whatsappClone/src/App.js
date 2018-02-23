import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyDattViIm-n-ClANZWtY786OBCJa7wvSIk",
      authDomain: "whatsapp-clone-2107.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-2107.firebaseio.com",
      projectId: "whatsapp-clone-2107",
      storageBucket: "whatsapp-clone-2107.appspot.com",
      messagingSenderId: "277972349141"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
