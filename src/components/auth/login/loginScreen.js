import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, FormLabel, FormInput, Card, Icon } from 'react-native-elements';
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
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../images/logo.png')} ></Image>
                <Text style={styles.header}>
                    Sign in
                </Text>

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
                            placeholder="Email address..."
                            name="email"
                            small
                            iconLeft
                            Icon={{name: 'mail'}}
                            onChange={(event) => this.changeUserData(event, 'email')}
                        />

                        {this.props.login.errors.password &&
                        <Text style={styles.errorLabel}>
                            {this.props.login.errors.password}
                        </Text>}
                        <FormInput
                            name="password"
                            secureTextEntry
                            placeholder="Password..."
                            small
                            iconLeft
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
        );
    }
}

LoginScreen.navigationOptions = {
    title: 'Home page',
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
    errorLabel: {
        color: '#d73a49',
        marginLeft: 19
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