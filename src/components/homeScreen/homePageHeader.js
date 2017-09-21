import React from 'react';
import { Component, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';

class HomePageHeader extends React.Component {
	constructor(props) {
		super(props)
	}

    static contextTypes = {
        drawer: PropTypes.object.isRequired
    };

    render() {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.mainControlPanelButton} onPress={this.context.drawer.toggle}>
                    <Icon name='bars' style={styles.menuButton}/>
                </TouchableOpacity>
                <Image style={styles.image} source={require('../../images/logo.png')} ></Image>
                <View style={styles.menuNotButton}/>
            </View>
        )
    }
}

export default HomePageHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(250, 250, 250)'
    },
    image: {
        alignSelf: 'center',
        width: 137,
        height: 31,
        marginBottom: 7,
        marginTop: 7
    },
    menuButton: {
        fontSize: 24,
        paddingLeft: 10
    },
    menuNotButton: {
        width: 16
    }
});