import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
//import { browserHistory } from 'react-router';
import R from 'ramda';
import NavigatorService from '../../../../navigators/navigatorService';
import ContextMenuIcon from '../../../contextMenu/contextMenuIcon';
import { createRolesObject } from '../../homePageService';

class BaseItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            const rolesObject = createRolesObject(R.path(['collaborators'], this.props.team))
        return (
            <View>
                <View>
                    <View style={styles.baseContainer}>
                        <TouchableOpacity
                            style = {[{backgroundColor: `${this.props.base.color || '#FFF'}`}, styles.baseIconContainer]}
                            onPress={() => NavigatorService.navigate('Dashboard', this.props.base)}>
                            <Icon
                                style={styles.baseIcon}
                                onClick={() => {
                                        browserHistory.push(`/dashboard/${this.props.base._id}/${this.props.base.tables[0]}`)             // Todo: !!!!!!!!!!!!!!!!!!
                                        this.props.saveCurrentTeamRoles(R.mergeWith(R.merge, rolesObject, this.props.collaborators[this.props.teamId]))
                                }}
                                name='home'//{this.props.base.icon}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.baseName}>{this.props.base.name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default BaseItem;
//<View style = {{backgroundColor: `${this.props.base.color}` }} >

/*
                        <View>
                            <View>
                                <ContextMenuIcon
                                    teamNames={this.props.teamNames}
                                    handleClick = {this.props.handleClick}
                                    base = {this.props.base}
                                    menu={this.props.menu}
                                    teamId={this.props.teamId}
                                    />
                            </View>
                        </View>
*/

const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: 'rgba(142, 142, 142, 0.14)'
    },
    baseIconContainer: {
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#8e8e8e',
        width: 40,
        height: 40
    },
    baseIcon: {
        alignSelf: 'center'
    },
    baseName: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginLeft: 20
    }
});

/*

class BaseItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            const rolesObject = createRolesObject(R.path(['collaborators'], this.props.team))
        return (
            <View>
                <View>
                    <View style={styles.baseContainer}>
                            <Icon
                                style={[{backgroundColor: `${this.props.base.color}` }, styles.baseIcon]}
                                onClick={() => {
                                        browserHistory.push(`/dashboard/${this.props.base._id}/${this.props.base.tables[0]}`)             // Todo: !!!!!!!!!!!!!!!!!!
                                        this.props.saveCurrentTeamRoles(R.mergeWith(R.merge, rolesObject, this.props.collaborators[this.props.teamId]))
                                }}
                                onPress={() => NavigatorService.navigate('Dashboard')}
                                name='home'//{this.props.base.icon}
                            />
                        <View>
                            <Text style={styles.baseName}>{this.props.base.name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: 'rgba(142, 142, 142, 0.14)'
    },
    baseIcon: {
        alignSelf: 'center',
        padding: 8,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#8e8e8e'
    },
    baseName: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginLeft: 20
    }
});
*/