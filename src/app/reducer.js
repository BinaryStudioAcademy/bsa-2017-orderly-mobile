import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/appNavigator';
import signUp from '../components/auth/signUp/signUpReducer';
import login from '../components/auth/login/loginReducer';
import dashboard from '../components/dashboard/dashboardReducer';
import baseStore from '../components/homeScreen/homePageReducer';
import userProfile from '../components/userProfile/userProfileReducer';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

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
            NavigationActions.navigate({ routeName: 'Login' }),
            state
        );
        break;
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

    return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
    case 'Login':
        return { ...state, isLoggedIn: true };
    case 'Logout':
        return { ...state, isLoggedIn: false };
    default:
        return state;
    }
}

const AppReducer = combineReducers({
    nav,
    auth,
    login,
    signUp,
    dashboard,
    baseStore,
    userProfile
});

export default AppReducer;