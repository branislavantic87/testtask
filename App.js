import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './src/Router';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" barStyle={'dark-content'} />
        <Provider store={store} >
          <Router />
        </Provider>
      </SafeAreaView>
    )
  }
}
