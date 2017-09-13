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
        margin: 10,
    },
    signInButton: {
        marginTop: 20
    },
    signUpBlock: {
        alignSelf: 'flex-start'
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 14
    },
    signUpButton: {
        alignSelf: 'flex-start',
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
                <FormLabel>

                </FormLabel>
                <FormInput
                    placeholder="Email address..."
                    small
                    iconLeft
                    Icon={{name: 'mail'}}

                />
                <FormLabel>

                </FormLabel>
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
                backgroundColor="#ff7b00"
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
    title: 'Home page',
};

export default connect()(LoginScreen);