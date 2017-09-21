import React from 'react';
import R from 'ramda';
import { StyleSheet, View } from 'react-native';
import CollaboratorItem from './collaboratorItem';

const Collaborators = ({ team, collaborators, showUserPopup, isShowUserPopup }) => {
	if (R.isEmpty(collaborators)) return (<View></View>)
	else return (
		<View>
			{R.map(user => CollaboratorItem(team, user, R.path([team._id, user.userId], collaborators), showUserPopup,
					isShowUserPopup)
				)(R.path(['collaborators'], team) || [])}
		</View>

	)
}


export default Collaborators;

