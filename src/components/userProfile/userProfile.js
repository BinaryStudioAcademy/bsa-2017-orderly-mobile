import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import R from 'ramda'
import './userProfile.scss';
import avatar from '../../../images/avatar.png';
import { getRolesBackgroundColor, createRolesObject } from '../homePage/homePageService'
import AppConfig from '../../config';

class UserProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            avatar: this.props.user && this.props.user.avatar ? this.props.user.avatar : ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({ 
            avatar: nextProps.user.avatar ? nextProps.user.avatar : '' 
            })
        }
    }

    render() {
        let username = '';
        let rolesObject
        if (this.props.user) {
            username = this.props.user.firstName + ' ' + this.props.user.lastName;
	        rolesObject = R.path([this.props.user._id, 'role'])(createRolesObject(this.props.members) || [])
        }
        return (
            <View id="user-info" style={styles.header-icon}>
                <Link to={'/user-page'} title={username}>
                    <Image  src={ this.state.avatar != '' ?
                        `${AppConfig.host}/files/${this.props.user.avatar}`
                        : avatar}
                            avatar />
                    <Text style={styles.user-status}/>
                </Link>
            </View>
        );
    }
}


export default UserProfileScreen;