import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import ContextMenu from './contextMenu';

class ContextMenuIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuVisible: false
        };

        this.handleClickOnMenu = this.handleClickOnMenu.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    
    handleClickOnMenu(event) {
        
        if (!this.state.menuVisible) {
            document.addEventListener('click', this.handleOutsideClick, false);                     // ToDo: ?????????
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);                  // ToDo: ?????????
        }

        if (this.refs.contextMenu) {
            this.setState(prevState => ({
                 menuVisible: !prevState.menuVisible,
            }));
        }
    }
    
    handleOutsideClick(e) {
        if ( event.target.closest(".menu-show-2") === null) {                                       // ToDo: ?????????
            if (this.node) {
                if (this.node.contains(e.target)) {                                                 // ToDo: ?????????
                    return;
                }
            }
        this.handleClickOnMenu();
        }
    }

render() {
        return(
            <View ref="contextMenu">
                <View ref={node => { this.node = node }} >
                 <View onPress={(event) => this.handleClickOnMenu(event)} >
                    <Icon
                        name='settings'
                        onClick={()=>this.props.handleClick(null, 'show', this.props.base._id)}
                    />
                </View>
                </View>
                <View>
                    <ContextMenu
                        teamNames={this.props.teamNames}
                        handleClick = {this.props.handleClick}
                        base = {this.props.base}
                        teamId={this.props.teamId}
                        teamNames={this.props.teamNames}
                        />
                </View>
            </View>
            )
    }
}


export default ContextMenuIcon