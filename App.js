/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import AppContainer from './app/navigator';
import SplashScreen from 'react-native-splash-screen';


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


const App = () =>  {

    useEffect(() => {
        SplashScreen.hide();
      }, []);


  return (
  
      <AppContainer />
    
  );
};

export default App;

