import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, FormLabel, FormInput, Card, Icon } from 'react-native-elements';
import R from 'ramda';
import * as signUpActions from './signUpActions';

//const SignupScreen = ({ navigation, dispatch }) => (
class SignupScreen extends Component {
    constructor(props) {
        super(props);
    }
/*
    handleSignUp = () => {
        this.props.signUp(this.props.signUp);
    };

    handleChange = (field) => {
        this.props.changeSignUpForm({
                [field.name]: field.value,
            }
        )
    };
    */
    changeUserData(event) {
        this.props.changeUserData({
                [event.target.name]: event.target.value
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
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../images/logo.png')} ></Image>
                <Text style={styles.header}>
                    Sign up
                </Text>
                <Text style={styles.instructions}>
                    Create an account
                </Text>
                <Card>
                    <FormInput
                        placeholder="First Name..."
                        name="firstName"
                        onChange={this.changeUserData}
                    />
                    <FormInput
                        placeholder="Last Name..."
                        name="lastName"
                        onChange={this.changeUserData}
                    />
                    <FormInput
                        placeholder="Email address..."
                        name="email"
                        onChange={this.changeUserData}
                    />
                    <FormInput
                        secureTextEntry
                        placeholder="Password..."
                        name="password"
                        onChange={this.changeUserData}
                    />
                    <Button
                        style={styles.signUpButton}
                        backgroundColor="#ff7b00"
                        title="Sign up for free"
                        //onPress={() => navigation.dispatch({ type: 'Login' })}
                        onPress={this.processForm}
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
                            this.props.navigation.navigate('Login')}
                        small
                        title="Sign in"
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        signUp: state.signUp
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(signUpActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

/*
SignupScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

SignupScreen.navigationOptions = {
    title: 'Sign in',
};

export default connect()(SignupScreen);
*/

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
        backgroundColor: '#d73a49'
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
