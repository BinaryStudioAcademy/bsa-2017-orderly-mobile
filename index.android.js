import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Dashboard from './components/dashboard/dashboard';

export default class OrderlyNative extends Component {

  render() {
    return (
      <Dashboard/>
    );
  }
}

AppRegistry.registerComponent('OrderlyNative', () => OrderlyNative);
