import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Sign up
    </Text>
    <Text style={styles.instructions}>
      Create an account
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Login"
    />
  </View>
);

SignupScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SignupScreen.navigationOptions = {
  title: 'Sign Up',
};

export default SignupScreen;