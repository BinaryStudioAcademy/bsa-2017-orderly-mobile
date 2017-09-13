import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Button, Image, FlatList
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseName: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBase}>
            <Button style={styles.headerHome} title='home' onPress={() => {
              this.state.baseName ?
                this.setState({baseName: ''})
                :
                this.setState({baseName: 'Clones'});
            }}/>
            <View style={styles.baseTitle}>
              <Icon name='computer'/>
              <Text style={styles.baseName}>{this.state.baseName || 'Default'}</Text>
            </View>
            <Image style={styles.headerUser} source={require('../../images/default-avatar.png')}/>
          </View>
        </View>
        <FlatList
            data={[
              {key: 'Devin'},{key: 'Jackson'},{key: 'James'},{key: 'Joel'},{key: 'John'},{key: 'Jillian'},{key: 'Jimmy'},{key: 'Julie'},
              {key: 'Devin2'},{key: 'Jackson2'},{key: 'James2'},{key: 'Joel2'},{key: 'John2'},{key: 'Jillian2'},{key: 'Jimmy2'},{key: 'Julie2'},
              {key: 'Devin3'},{key: 'Jackson3'},{key: 'James3'},{key: 'Joel3'},{key: 'John3'},{key: 'Jillian3'},{key: 'Jimmy3'},{key: 'Julie3'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  header: {
    height: 50,
    backgroundColor: '#000',
  },
  headerBase: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#AAA',
  },
  baseTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerHome: {
    color: '#F00',
  },
  baseName: {
    // flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  headerUser: {
    height: 50,
    width: 50,
    resizeMode: 'center',
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#AAF',
    padding: 5,
    fontSize: 17,
    margin: 5,
    // height: 44,
  },
});

AppRegistry.registerComponent('Dashboard', () => Dashboard);
