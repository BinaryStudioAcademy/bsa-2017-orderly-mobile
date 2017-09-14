import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import axios from 'axios';
//import {browserHistory} from 'react-router';
import LoginScreen from '../components/auth/login/loginScreen';
import SignupScreen from '../components/auth/signUp/signupScreen';
import HomeScreen from '../components/homeScreen/homeScreen';
import ProfileScreen from '../components/profile/profileScreen';
import DashboardScreen from '../components/dashboard/dashboardScreen';
import Auth from '../components/auth/auth';
import AppConfig from '../config';

export const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Dashboard: { screen: DashboardScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

(function() {
    axios.defaults.baseURL = AppConfig.host;
    
    const token = Auth.getToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }
    
    // Add a response interceptor
    axios.interceptors.response.use(null,
        function (error) {
            if (error.response.status === 401) {
                if (Auth.getToken()) {
                    Auth.deauthenticateUser();
                }
                //browserHistory.push('/login');
                navigation.dispatch({ type: 'Login' });
            }
            return Promise.reject(error.response);
        });
})();