import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from '../../navigators/navigatorService';

let HomePageHeader = (props) => {
  return (
    <View>
        <TouchableHighlight
            onPress={() => {NavigatorService.navigate('Logout')}}
        >
            <View>
                <Icon name='exit-to-app' style={styles.logOutIcon}/>
                <View><Text>Logout</Text></View>
            </View>
        </TouchableHighlight>
    </View>
  )
}

export default HomePageHeader;

const styles = StyleSheet.create({
    logOutIcon: {
        //?????????
    }
});