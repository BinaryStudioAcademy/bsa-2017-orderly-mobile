import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {bindActionCreators} from 'redux';
import * as dashboardActions from './dashboardActions'
import {TablesNavigator} from '../../navigators/appNavigator';
import { baseIcons } from '../configuration/baseIcons';

class Dashboard extends Component {
    static navigationOptions = ({navigation}) => {
        console.log('DASH NAV OPTIONS');
        console.log(navigation);
        const {params} = navigation.state;
        //title: <NavHeader baseName={params.name} baseIcon={baseIcons[params.icon]}/>,
        return {
            headerStyle: {backgroundColor: params.color},
            headerTintColor: 'rgb(230, 230, 230)',
            headerTitle: <NavHeader baseName={params.name} baseIcon={baseIcons[params.icon]}/>
        }
    };

    componentWillMount() {
        console.log('WILL MOUNT');
        console.log(this.props);
        this.props.getTables(this.props.navigation.state.params.tables);
    }

    componentDidMount() {
        console.log(this.props);
        console.log('DID MOUNT');
    }

    onSwitchTable = (tableId) => {
        this.props.switchTable(tableId);
    };

    render() {
        console.log('DASHBOARD PROPS');
        console.log(this.props);
        const base = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={[styles.viewHeader, {backgroundColor: base.color, opacity: 0.8}]}>
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
                {this.props.dashboard.tables[0] &&
                    <TablesNavigator screenProps={{table: this.props.dashboard.tables[0], baseColor: base.color, base: base}}/>
                }
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
        color: 'rgb(255, 255, 255)',
    },
    viewName: {
        color: '#000',
        fontSize: 20,
        color: 'rgb(255, 255, 255)',
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
        color: 'rgb(255, 255, 255)',
    },
    headerTitle: {
        marginLeft: 12,
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(230, 230, 230)',
    }
});

const NavHeader = ({baseName, baseIcon}) => {
    return (
        <Text style={styles.headerTitle}>
            <Icon name={baseIcon} size={22}/>
            <Text>  {baseName}</Text>
        </Text>
    )
};

const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(dashboardActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);