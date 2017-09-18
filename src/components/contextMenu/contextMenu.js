import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BaseName from './contextMenuInput';
import BaseColor from './contextMenuBaseColor';
import BaseIcon from './contextMenuBaseIcon';
import BaseOptions from './contextMenuBaseOptions';

class ContextMenu extends Component {

    render(){
        return (
            <View>
                <BaseName handleClick = {this.props.handleClick} base = {this.props.base} />
                <BaseColor handleClick = {this.props.handleClick} base = {this.props.base} />
                <BaseIcon handleClick = {this.props.handleClick}    base = {this.props.base} />
                <BaseOptions handleClick = {this.props.handleClick}    
                    base = {this.props.base} teamId={this.props.teamId}
                    tables={this.props.tables}
                    teamNames={this.props.teamNames}
                />
            </View>
        )
    }
}

export default ContextMenu;