import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigators/appNavigator';
import Dashboard from './src/components/dashboard/dashboardScreen';
import RootReducer from './src/reducers/';

export default class OrderlyNative extends Component {

  render() {
    return (
      <Provider store={createStore(RootReducer)}>
        <Dashboard/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('OrderlyNative', () => OrderlyNative);
