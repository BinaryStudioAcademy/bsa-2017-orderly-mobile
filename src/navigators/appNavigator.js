import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/loginScreen';
import SignupScreen from '../components/signupScreen';
import HomeScreen from '../components/homeScreen';
import ProfileScreen from '../components/profileScreen';
import DashboardScreen from '../components/dashboard/dashboardScreen';

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