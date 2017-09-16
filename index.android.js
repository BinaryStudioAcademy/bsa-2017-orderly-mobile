import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/app/configureStore';
import AppWithNavigationState from './src/navigators/appNavigator';

class OrderlyNative extends React.Component {
    store = configureStore();

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('OrderlyNative', () => OrderlyNative);

export default OrderlyNative;