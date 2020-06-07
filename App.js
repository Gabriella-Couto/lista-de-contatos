import React, { useState } from 'react';
import Navigation  from './Navigation/Navigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import ContatoReducer from './Store/ContatoReducer';
import { init } from './helpers/Database';  
import ENV from './env';
import * as firebase from 'firebase';
import 'firebase/firestore';

if (!firebase.apps.length)
firebase.initializeApp(ENV);

const db = firebase.firestore();

init().
  then(() => {
    console.log("Base criada com sucesso ou já existente.");
  }).
  catch((err) => {
    console.log("Criação da base falhou.");
    console.log(err);
})

const rootReducer = combineReducers({
  contatos: ContatoReducer
});

//criando o estado centralizado
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Provider store={store}>
          <Navigation/>
      </Provider>
    );
  }
}

export default App;


