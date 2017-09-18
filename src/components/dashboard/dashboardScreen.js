import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {bindActionCreators} from 'redux';
import * as dashboardActions from './dashboardActions'
import {TablesNavigator} from '../../navigators/appNavigator';

class Dashboard extends Component {
    static navigationOptions = ({navigation}) => {
        console.log('DASH NAV OPTIONS');
        console.log(navigation);
        return {
            title: navigation.dashboard.base.name,
            icon: <Icon name='cogs' size={30}/>,
        }
    };

    onSwitchTable = (tableId) => {
        this.props.switchTable(tableId);
    };

    render() {
        console.log('DASHBOARD PROPS');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerBase}>
                        <View style={styles.baseTitle}>
                            <Icon style={styles.baseIcon} name='cogs' size={30}/>
                            <Text style={styles.baseName}>{this.props.navigation.dashboard.base.name}</Text>
                        </View>
                        <Image style={styles.headerUser} source={require('../../images/default-avatar.png')}/>
                    </View>
                </View>
                <TablesNavigator/>
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
        marginBottom: 5,
        backgroundColor: '#000',
    },
    headerBase: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#AAA',
    },
    baseTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    baseIcon: {
        alignSelf: 'center',
    },
    headerHome: {
        color: '#F00',
    },
    baseName: {
        textAlign: 'center',
        fontSize: 20,
        margin: 5,
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
    },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(dashboardActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);