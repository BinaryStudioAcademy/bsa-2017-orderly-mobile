import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import avatar from '../../../../../images/avatar.png';
import AppConfig from '../../../../../config';

class MemberInfo extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const collaborator = this.props.collaborator || {
				avatar: '',
				firstName: '',
				lastName: '',
				email: '',
			}
			//<Image source={ collaborator.avatar ? `${AppConfig.host}/files/${collaborator.avatar}` : avatar}/>
		return(
			<View key={collaborator._id}>
				<Image source={avatar}/>
				<View>
					<Text>{collaborator.firstName} {collaborator.lastName}</Text>
					<Text>{collaborator.email}</Text>
				</View>
			</View>
		)
	}
}

export default MemberInfo;
