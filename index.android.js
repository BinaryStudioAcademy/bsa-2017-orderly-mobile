import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './src/app/reducer';
import AppWithNavigationState from './src/navigators/appNavigator';

class OrderlyNative extends React.Component {
    store = createStore(AppReducer);

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
