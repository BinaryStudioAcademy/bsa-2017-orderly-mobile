import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
		return(
			<View key={collaborator._id}>
				<Image source={ collaborator.avatar ? `${AppConfig.host}/files/${collaborator.avatar}` : avatar}
				     />
				<View>
					<View>{collaborator.firstName} {collaborator.lastName}</View>
					<View>{collaborator.email}</View>
				</View>
			</View>
		)
	}
}

export default MemberInfo;
