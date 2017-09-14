import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, FormLabel, FormInput, Card, Icon } from 'react-native-elements';
import R from 'ramda';
import * as LoginActions from './loginActions';

class LoginScreen extends Component {
    static navigationOptions = ({navigation}) => {
        title: 'Home page'
    }

//  constructor(props) {
//    super(props);
//    this.state = {
//      baseName: '',
//    };
//  }
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

    changeUserData(event) {
        const field = event.target.name;
        const user = {};
        user[field] = event.target.value;
        this.props.changeUserData(user);
    }

    processForm(e) {
        e.preventDefault();
        this.props.performLogin({
            email: this.props.login.email,
            password: this.props.login.password
        });
    }

    render() {
        return (

//const LoginScreen = ({ navigation, dispatch }) => (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../images/logo.png')} ></Image>
                <Text style={styles.header}>
                    Sign in
                </Text>
                <Card>
                        {(!R.isEmpty(this.props.login.errors) ||
                        !this.props.login.success) &&
                        <FormLabel style={styles.errorLabel}>
                            {this.props.login.message}
                        </FormLabel>}

                        <FormInput
                            placeholder="Email address..."
                            name="email"
                            small
                            iconLeft
                            Icon={{name: 'mail'}}
                            onChange={this.changeUserData}
                        />
                        {this.props.login.errors.email &&
                        <FormLabel style={styles.errorLabel}>
                            {this.props.login.errors.email}
                        </FormLabel>}

                        <FormInput
                            name="password"
                            secureTextEntry
                            placeholder="Password..."
                            small
                            iconLeft
                            Icon={{name: 'lock'}}
                            onChange={this.changeUserData}
                        />
                        {this.props.login.errors.password &&
                        <FormLabel style={styles.errorLabel}>
                            {this.props.login.errors.password}
                        </FormLabel>}

                        <Button
                            style={styles.signInButton}
                            backgroundColor="#03A9F4"
                            title="Sign in"
                            //onPress={() => navigation.dispatch({ type: 'Login' })}
                            onPress={this.processForm}
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
                            this.props.navigation.navigate('Signup')}
                        small
                        title="Sign up for free"
                    />
                </View>
            </View>
        );
    }
}
/*
LoginScreen.propTypes = {
    redirectLoggedInUser: PropTypes.func.isRequired,
    changeUserData: PropTypes.func.isRequired,
    performLogin: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
};
*/

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LoginActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


/*
LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

LoginScreen.navigationOptions = {
    title: 'Home page',
};

export default connect()(LoginScreen);
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
        margin: 10,
    },
    errorLabel: {
        backgroundColor: '#d73a49'
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