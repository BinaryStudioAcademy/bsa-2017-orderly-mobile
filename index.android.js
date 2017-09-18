import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/app/configureStore';
import AppWithNavigationState from './src/navigators/appNavigator';
import ESS from 'react-native-extended-stylesheet';
ESS.build({});

export default class OrderlyNative extends React.Component {
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
