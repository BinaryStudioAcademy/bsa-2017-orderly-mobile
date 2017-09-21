import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Button, Image,
} from 'react-native';

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
            <Text style={styles.baseName}>{this.state.baseName || 'Default'}</Text>
            <Image style={styles.headerUser} source={{uri: 'https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png'}}/>
          </View>
        </View>
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
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#AAA',
  },
  headerHome: {
    color: '#F00',
  },
  baseName: {
    flex: 1,
    textAlign: 'center',
  },
  headerUser: {
    height: 50,
    width: 50,
    resizeMode: 'center',
  }
});

AppRegistry.registerComponent('Dashboard', () => Dashboard);
