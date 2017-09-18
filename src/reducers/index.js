import {combineReducers} from 'redux';
import {NavigationActions} from 'react-navigation';

import {AppNavigator} from '../navigators/appNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
    case 'Login':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
        );
        break;
    case 'Logout':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({routeName: 'Login'}),
            state
        );
        break;
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

    return nextState || state;
}

const initialAuthState = {isLoggedIn: false};

function auth(state = initialAuthState, action) {
    switch (action.type) {
    case 'Login':
        return {...state, isLoggedIn: true};
    case 'Logout':
        return {...state, isLoggedIn: false};
    default:
        return state;
    }
}

const AppReducer = combineReducers({
    nav,
    auth,
});

export default AppReducer;