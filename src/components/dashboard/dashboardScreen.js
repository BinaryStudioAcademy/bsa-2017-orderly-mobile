import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {bindActionCreators} from 'redux';
import * as dashboardActions from './dashboardActions'
import {TablesNavigator} from '../../navigators/appNavigator';

class Dashboard extends Component {
    static navigationOptions = ({navigation, screenProps}) => {
        console.log('DASH NAV OPTIONS');
        console.log(navigation);
        console.log(screenProps);
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
                <View style={styles.viewHeader}>
                    <View style={styles.viewSelector}>
                        <Icon style={styles.viewIcon} name='th' size={25}/>
                        <Text style={styles.viewName}>Grid view</Text>
                    </View>
                    <View style={styles.viewControls}>
                        <View style={styles.viewFilter}>
                            <Icon style={styles.viewIcon} name='filter' size={20}/>
                            <Text style={styles.controlsText}>Filter</Text>
                        </View>
                        <View style={styles.viewSort}>
                            <Icon style={styles.viewIcon} name='sort-amount-desc' size={18}/>
                            <Text style={styles.controlsText}>Sort</Text>
                        </View>
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
        backgroundColor: '#FFF',
    },
    viewHeader: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        backgroundColor: '#AAA',
    },
    viewSelector: {
        alignItems: 'baseline',
        flexDirection: 'row',
        paddingLeft: 10,
    },
    viewIcon: {
        marginRight: 5,
        color: '#000',
    },
    viewName: {
        color: '#000',
        fontSize: 20,
    },
    viewControls: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    viewFilter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewSort: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
    },
    controlsText: {
        fontSize: 20,
    },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(dashboardActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);