import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, FormLabel, FormInput, Card, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    image: {
        alignSelf: 'flex-start',
        width: 137,
        height: 31,
        marginTop: 20,
        marginLeft: 12,
        marginBottom: 20
    },
    header: {
        fontSize: 20,
        margin: 10,
    },
    signInButton: {
        marginTop: 20
    },
    signUpBlock: {
        alignSelf: 'flex-start'
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 12
    },
    signUpButton: {
        backgroundColor: 'blue',
        color: 'white'
    }
});

const LoginScreen = ({ navigation, dispatch }) => (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../images/logo.png')} ></Image>
        <Text style={styles.header}>
            Sign in
        </Text>        
        <Card>
                <FormLabel>Email</FormLabel>
                <FormInput
                    placeholder="Email address..."
                    small
                    iconLeft
                    Icon={{name: 'mail'}}

                />
                <FormLabel>Password</FormLabel>
                <FormInput
                    secureTextEntry
                    placeholder="Password..."
                    small
                    iconLeft
                    Icon={{name: 'lock'}}
                />

                <Button
                style={styles.signInButton}
                backgroundColor="#03A9F4"
                title="Sign in"
                onPress={() => navigation.dispatch({ type: 'Login' })}
                />
        </Card>
        <View style={styles.signUpBlock}>
            <Text style={styles.text}>
                Dont have an account?
            </Text>
            <Button
                style={styles.signUpButton}
                onPress={() =>
                    dispatch(NavigationActions.navigate({ routeName: 'Signup' }))}
                small
                title="Sign up for free"
            />
        </View>
    </View>
);

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
    title: 'Log In',
};

export default connect()(LoginScreen);