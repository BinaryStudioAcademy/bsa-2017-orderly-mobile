import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import axios from 'axios';
import LoginScreen from '../components/auth/login/loginScreen';
import SignupScreen from '../components/auth/signUp/signupScreen';
import Logout from '../components/auth/logout/logout';
import HomeScreen from '../components/homeScreen/homeScreen';
import ProfileScreen from '../components/profile/profileScreen';
import DashboardScreen from '../components/dashboard/dashboardScreen';
import TableScreen from '../components/dashboard/table/tableScreen';
import Auth from '../components/auth/auth';
import AppConfig from '../config';
import NavigatorService from './navigatorService';

export const DashBoardNavigator = TabNavigator({
    Table: { screen: TableScreen },
    Table2: { screen: TableScreen },
});

export const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Logout: { screen: Logout },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Dashboard: { screen: DashBoardNavigator }
});

const AppWithNavigationState = ({ dispatch, nav, dashboard }) => (
    <AppNavigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav,
            dashboard: dashboard
        })}
        ref={(navigatorRef) => NavigatorService.setContainer(navigatorRef)}/>
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
    dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    nav: state.nav,
    dashboard: state.dashboard
});

export default connect(mapStateToProps)(AppWithNavigationState);

(function() {
    axios.defaults.baseURL = AppConfig.host;

    Auth.getToken().then((token) => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        } else {
            axios.defaults.headers.common['Authorization'] = null;
        }
    });

    // Add a response interceptor
    axios.interceptors.response.use(null,
        function (error) {
            if (error.response && error.response.status === 401) {
                Auth.getToken().then((token) => {
                    if (token) {
                        Auth.deauthenticateUser();
                    }
                });
                NavigatorService.navigate('Login');
            }
            return Promise.reject(error.response);
        });
})();