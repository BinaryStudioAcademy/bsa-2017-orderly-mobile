import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, FormLabel, FormInput, Card, Icon } from 'react-native-elements';
import R from 'ramda';
import * as signUpActions from './signUpActions';

class SignupScreen extends Component {
    constructor(props) {
        super(props);

        this.processForm = this.processForm.bind(this);
        this.changeUserData = this.changeUserData.bind(this);
    }

    changeUserData(event, field) {
        this.props.changeUserData({
                [field]: event.nativeEvent.text
            }
        )
    }

    processForm(e) {
        e.preventDefault();
        this.props.performSignUp({
            firstName: this.props.signUp.firstName,
            lastName: this.props.signUp.lastName,
            email: this.props.signUp.email,
            password: this.props.signUp.password
        });
    }

    render() {
        return (
            <ScrollView style={styles.signUpWrapper}>
                <View style={styles.signUpContainer}>
                    <Image style={styles.image} source={require('../../../images/logo.png')} ></Image>
                    <Text style={styles.signUpHeader}>
                        Sign up
                    </Text>
                    <Text style={styles.instructions}>
                        Create an account
                    </Text>
                    <View style={styles.signUpInputBlock}>
                        {this.props.signUp.errors.message &&
                        <Text style={styles.errorLabel}>
                            {this.props.signUp.errors.message}
                        </Text>}

                        {this.props.signUp.errors.firstName &&
                        <Text style={styles.errorLabel}>
                            {this.props.signUp.errors.firstName}
                        </Text>}
                        <FormInput
                            style={styles.signUpFormInput}
                            underlineColorAndroid='transparent'
                            placeholder="First Name..."
                            name="firstName"
                            onChange={(event) => this.changeUserData(event, 'firstName')}
                        />

                        {this.props.signUp.errors.lastName &&
                        <Text style={styles.errorLabel}>
                            {this.props.signUp.errors.lastName}
                        </Text>}
                        <FormInput
                            style={styles.signUpFormInput}
                            underlineColorAndroid='transparent'
                            placeholder="Last Name..."
                            name="lastName"
                            onChange={(event) => this.changeUserData(event, 'lastName')}
                        />

                        {this.props.signUp.errors.email &&
                        <Text style={styles.errorLabel}>
                            {this.props.signUp.errors.email}
                        </Text>}
                        <FormInput
                            style={styles.signUpFormInput}
                            underlineColorAndroid='transparent'
                            placeholder="Email address..."
                            name="email"
                            onChange={(event) => this.changeUserData(event, 'email')}
                        />

                        {this.props.signUp.errors.password &&
                        <Text style={styles.errorLabel}>
                            {this.props.signUp.errors.password}
                        </Text>}
                        <FormInput
                            style={styles.signUpFormInput}
                            underlineColorAndroid='transparent'
                            secureTextEntry
                            placeholder="Password..."
                            name="password"
                            onChange={(event) => this.changeUserData(event, 'password')}
                        />

                        <Button
                            style={styles.signUpButton}
                            backgroundColor="#ff7b00"
                            title="Sign up"
                            onPress={(e) => this.processForm(e)}
                        />

                        <View style={styles.signInBlock}>
                            <Text style={styles.text}>
                                Already have an account?
                            </Text>
                            <Button
                                style={styles.signInButton}
                                backgroundColor="#03A9F4"
                                onPress={() =>
                                    this.props.navigation.navigate('Login')}
                                title="Sign in"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

SignupScreen.navigationOptions = {
    title: 'Sign up'
};

function mapStateToProps(state) {
    return {
        signUp: state.signUp
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(signUpActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

const styles = StyleSheet.create({
    signUpWrapper: {
        backgroundColor: '#F5FCFF'
    },
    signUpContainer: {
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
    signUpHeader: {
        alignSelf: 'center',
        fontSize: 26,
        margin: 10
    },
    signUpInputBlock: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    signUpFormInput: {
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
        color: '#d73a49',
        marginLeft: 19
    },
    instructions: {
        alignSelf: 'flex-start',
        fontSize: 14,
        marginLeft: 19
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
        alignSelf: 'center'
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
