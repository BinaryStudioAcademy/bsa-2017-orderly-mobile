import React from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import LoginStatusMessage from './loginStatusMessage';
import AuthButton from './authButton';
import NavigatorService from '../../navigators/navigatorService';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logOutIcon: {
        //fontSize: 36???????????
    }
});
    /*
        <View
            //onPress={() => navigation.navigate('Logout')}
            onPress={() => navigation.dispatch({ type: 'Logout' })}
        >
            <Icon name='exit-to-app' style={styles.logOutIcon}/>
            <Text>
                Logout
            </Text>
        </View>
        <TouchableHighlight
            //onPress={() => navigation.navigate('Logout')}
            //onPress={() => navigation.dispatch({ type: 'Logout' })}
            onPress={() => {NavigatorService.navigate('Logout')}}
        >
            <View>
                <Icon name='exit-to-app' style={styles.logOutIcon}/>
                <Text>
                    Logout
                </Text>
            </View>
        </TouchableHighlight>
        */
const HomeScreen = ({navigation}) => (
    <View style={styles.container}>
        <TouchableHighlight
            //onPress={() => navigation.navigate('Logout')}
            //onPress={() => navigation.dispatch({ type: 'Logout' })}
            onPress={() => {NavigatorService.navigate('Logout')}}
        >
            <View>
                <Icon name='exit-to-app' style={styles.logOutIcon}/>
                <Text>
                    Logout
                </Text>
            </View>
        </TouchableHighlight>
        <LoginStatusMessage />
    </View>
);
//<AuthButton />
HomeScreen.navigationOptions = {
    title: 'Back to Login',
};

export default HomeScreen;