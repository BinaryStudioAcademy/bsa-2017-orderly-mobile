import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from '../../navigators/navigatorService';

let HomePageHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
        <Image style={styles.image} source={require('../../images/logo.png')} ></Image>
        <TouchableOpacity style={styles.logoutContainer}
            onPress={() => {NavigatorService.navigate('Logout')}}
        >
            <Icon name='exit-to-app'/>
        </TouchableOpacity>
    </View>
  )
}

export default HomePageHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 137,
        height: 31,
        marginLeft: 15,
        marginTop: 15
    },
    logoutContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 15
    }
});