import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationActions, TabNavigator } from 'react-navigation';
import axios from 'axios';
import AppConfig from '../config';
import NavigatorService from './navigatorService';
import Auth from '../components/auth/auth';
import SignupScreen from '../components/auth/signUp/signupScreen';
import LoginScreen from '../components/auth/login/loginScreen';
import Logout from '../components/auth/logout/logout';
import HomeScreen from '../components/homeScreen/homePageConnect';
import EditTeamScreen from '../components/homeScreen/homePageTeam/teams/team/editTeamScreen';
import UserProfileScreen from '../components/userProfile/userProfileScreen';
import DashboardScreen from '../components/dashboard/dashboardScreen';
import TableScreen from '../components/dashboard/table/tableScreen';

export const TablesNavigator = TabNavigator({
    Table: {screen: TableScreen},
    Table2: {screen: TableScreen},
}, {
    tabBarPosition: 'bottom',
});

export const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Logout: { screen: Logout },
    Home: { screen: HomeScreen },
    UserProfile: { screen: UserProfileScreen },
    Dashboard: { screen: DashboardScreen },
    EditTeamScreen: { screen: EditTeamScreen }
},
    { headerMode: 'screen' }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}
                  ref={navigatorRef => {NavigatorService.setContainer(navigatorRef);}}/>
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

    Auth.getToken().then(token => {
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
                Auth.getToken().then(token => {
                    if (token) {
                        Auth.deauthenticateUser();
                    }
                });
                NavigatorService.navigate('Login');
            }
            return Promise.reject(error.response);
        });
})();