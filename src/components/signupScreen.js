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
        margin: 14
    },
    header: {
        fontSize: 26,
        margin: 10
    },
    instructions: {
        alignSelf: 'flex-start',
        fontSize: 14,
        marginLeft: 14
    },
    namesBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    namesForm: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    signUpButton: {
        marginTop: 20,
    },
    signInBlock: {
        alignSelf: 'flex-start'
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 14
    },
    signInButton: {
        color: 'white'
    }
});

const SignupScreen = ({ navigation, dispatch }) => (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../images/logo.png')} ></Image>
        <Text style={styles.header}>
            Sign up
        </Text>
        <Text style={styles.instructions}>
            Create an account
        </Text>
        <Card>
            <FormInput
                placeholder="First Name..."
            />
            <FormInput
                placeholder="Last Name..."
            />
            <FormInput
                placeholder="Email address..."
            />
            <FormInput
                secureTextEntry
                placeholder="Password..."
            />
            <Button
            style={styles.signUpButton}
            backgroundColor="#ff7b00"
            title="Sign up for free"
                onPress={() => navigation.dispatch({ type: 'Login' })}
            />
        </Card>
        <View style={styles.signInBlock}>
            <Text style={styles.text}>
                Already have an account?
            </Text>
            <Button
                style={styles.signInButton}
                backgroundColor="#03A9F4"
                onPress={() =>
                    dispatch(NavigationActions.navigate({ routeName: 'Login' }))}
                small
                title="Sign in"
            />
        </View>
    </View>
);

SignupScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

SignupScreen.navigationOptions = {
    title: 'Sign in',
};

export default connect()(SignupScreen);

