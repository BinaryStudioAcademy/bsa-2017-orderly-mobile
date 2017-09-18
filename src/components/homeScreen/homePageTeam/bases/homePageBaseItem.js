import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
//import { browserHistory } from 'react-router';
import R from 'ramda';
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
                    {this.props.base.name}
                </View>
                <View>                
                    <View>
                        <View>
                            <Icon inverted link    size='huge'
                                onClick={() => {
                                        browserHistory.push(`/dashboard/${this.props.base._id}/${this.props.base.tables[0]}`)             // Todo: !!!!!!!!!!!!!!!!!!
                                        this.props.saveCurrentTeamRoles(R.mergeWith(R.merge, rolesObject, this.props.collaborators[this.props.teamId]))
                                }}
                                name={this.props.base.icon}
                            />
                        </View>
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
                    </View>
                </View>
            </View>
        )
    }
}

export default BaseItem;
//<View style = {{backgroundColor: `${this.props.base.color}` }} >