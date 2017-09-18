import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

let HomePageHeader = (props) => {
  return (
    <View>
        <TouchableHighlight
            onPress={() => {NavigatorService.navigate('Logout')}}
        >
            <View>
                <Icon name='exit-to-app' style={styles.logOutIcon}/>
                <Text>
                    Logout
                </Text>
            </View>
        </TouchableHighlight>
    </View>
  )
}

export default HomePageHeader