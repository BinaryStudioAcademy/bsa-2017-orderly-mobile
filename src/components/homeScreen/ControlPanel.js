import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import NavigatorService from '../../navigators/navigatorService';

export default class ControlPanel extends React.Component {

    render() {
        let {closeDrawer} = this.props;
        let {user} = this.props;
        return (
            <ScrollView style={styles.controlPanelContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.image} source={require('../../images/logo.png')} ></Image>
                </View>
                <TouchableOpacity style={styles.menuContainer}
                    onPress={() => NavigatorService.navigate('UserProfile', user)}
                >
                    <Icon name='user-circle' style={styles.menuText}/>
                    <Text style={styles.menuText}>User Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuContainer}
                    onPress={() => {NavigatorService.navigate('Logout')}}
                >
                    <Icon name='sign-out' style={styles.menuText}/>
                    <Text style={styles.menuText}>Sign out</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

ControlPanel.propTypes = {
    closeDrawer: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    controlPanelContainer: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)',
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 26,
        borderBottomWidth: 2,
        borderColor: 'rgba(142, 142, 142, 0.14)',
        backgroundColor: 'rgb(245, 245, 245)',
    },
    image: {
        alignSelf: 'center',
        width: 137,
        height: 31,
        marginBottom: 7,
        marginTop: 7
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 2,
        borderColor: 'rgba(142, 142, 142, 0.14)'
    },
    menuText: {
        fontSize: 18,
        marginRight: 20
    }
})