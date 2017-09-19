import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from '../../navigators/navigatorService';

let HomePageHeader = (props) => {
  return (
    <View>
        <TouchableHighlight style={styles.logoutContainer}
            onPress={() => {NavigatorService.navigate('Logout')}}
        >
            <View>
                <Icon name='exit-to-app'/>
            </View>
        </TouchableHighlight>
    </View>
  )
}

export default HomePageHeader;

const styles = StyleSheet.create({
    logoutContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 15
    }
});