import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, FormLabel, FormInput, Card, Icon, FormValidationMessage } from 'react-native-elements';
import R from 'ramda';
import * as LoginActions from './loginActions';
import { loginService } from './loginService';
import NavigatorService from '../../../navigators/navigatorService';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.processForm = this.processForm.bind(this);
        this.changeUserData = this.changeUserData.bind(this);
    }

    componentWillMount(){
        // Redirect to homepage if user is logged in
        this.props.redirectLoggedInUser();
    }

    changeUserData(event, field) {
        const user = {};
        user[field] = event.nativeEvent.text;
        this.props.changeUserData(user);
    }

    processForm() {
        this.props.performLogin({
            email: this.props.login.email,
            password: this.props.login.password
        });
    }

    render() {
        return (
            <ScrollView style={styles.loginWrapper}>
                <View style={styles.loginContainer}>
                    <Image style={styles.image} source={require('../../../images/logo.png')} ></Image>
                    <Text style={styles.loginHeader}>
                        Sign in
                    </Text>
                    <View style={styles.loginInputBlock}>
                        {(!R.isEmpty(this.props.login.errors) ||
                        !this.props.login.success) &&
                        <Text style={styles.errorLabel}>
                            {this.props.login.message}
                        </Text>}

                        {this.props.login.errors.email &&
                        <Text style={styles.errorLabel}>
                            {this.props.login.errors.email}
                        </Text>}
                        <FormInput
                            style={styles.loginFormInput}
                            underlineColorAndroid='transparent'
                            placeholder="Email address..."
                            name="email"
                            Icon={{name: 'mail'}}
                            onChange={(event) => this.changeUserData(event, 'email')}
                        />

                        {this.props.login.errors.password &&
                        <Text style={styles.errorLabel}>
                            {this.props.login.errors.password}
                        </Text>}
                        <FormInput
                            style={styles.loginFormInput}
                            underlineColorAndroid='transparent'
                            name="password"
                            secureTextEntry
                            placeholder="Password..."
                            Icon={{name: 'lock'}}
                            onChange={(event) => this.changeUserData(event, 'password')}
                        />

                        <Button
                            style={styles.signInButton}
                            backgroundColor="#03A9F4"
                            title="Sign in"
                            onPress={this.processForm}
                        />
                        <View style={styles.signUpBlock}>
                            <Text style={styles.text}>
                                Dont have an account?
                            </Text>
                            <Button
                                style={styles.signUpButton}
                                backgroundColor="#ff7b00"
                                onPress={() => NavigatorService.navigate('Signup')}
                                small
                                title="Sign up for free"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

LoginScreen.navigationOptions = {
    title: 'Sign in',
    header: null
};

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LoginActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    loginWrapper: {
        backgroundColor: '#F5FCFF'
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },
    image: {
        alignSelf: 'center',
        width: 137,
        height: 31,
        margin: 14,
        marginTop: 20
    },
    loginHeader: {
        fontSize: 26,
        margin: 10,
        alignSelf: 'center',
    },
    loginInputBlock: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    loginFormInput: {
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderColor: '#ABABAB',
        borderWidth: 0.5,
        alignSelf: 'stretch',
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16
    },
    errorLabel: {
        color: '#ff0000',
        marginLeft: 19
    },
    signInButton: {
        marginTop: 20
    },
    signUpBlock: {
        marginTop: 40,
        alignSelf: 'center'
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 14
    },
    signUpButton: {
        width: 100
    }
});