import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import LoginStatusMessage from './loginStatusMessage';
import AuthButton from './authButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logOutIcon: {
    // fontSize: 36
  }
});

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <View
        //onPress={() => navigation.navigate('Logout')}
        onPress={() => navigation.dispatch({ type: 'Logout' })}
    >
        <Icon name='exit-to-app' style={styles.logOutIcon}/>
        <Text>
            Logout
        </Text>
    </View>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

HomeScreen.navigationOptions = {
  title: 'Home Screen',
};

export default HomeScreen;