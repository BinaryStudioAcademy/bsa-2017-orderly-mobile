import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import avatar from '../../../../../images/avatar.png';
import MemberInfo from '../memberInfo/memberInfo';
import { getRolesColor } from '../../../homePageService';
import AppConfig from '../../../../../config';

const hidingPopupStyle = (isShowUserPopup, teamId, userId) => ({
	display: isShowUserPopup[0] === teamId
			 && isShowUserPopup[1] === userId ? 'block' : 'none'
})


const CollaboratorItem = (team, teamUser, collaborator, showUserPopup, isShowUserPopup) => {
	if (collaborator) return (
		<View key={teamUser.userId}>
		<Image source={ collaborator.avatar ? `${AppConfig.host}/files/${collaborator.avatar}` : avatar}
		       onMouseOver={() => {
			       if (isShowUserPopup[0]) showUserPopup(['', ''])
			       else showUserPopup([team._id, teamUser.userId])
		       }}
		       onMouseLeave={() => {
			       showUserPopup(['', ''])
		       }}
		       avatar/>
       //<View style={hidingPopupStyle(isShowUserPopup, team._id, teamUser.userId)}>
		<View>
			<MemberInfo collaborator={collaborator} />
			<View>
				<View>
				  //<View style={{backgroundColor: 'green'}}/>
					<View/>
					online
				</View>
			  //<View style={getRolesColor(teamUser.role)}>{teamUser.role}</View>
				<View>{teamUser.role}</View>
			</View>
		</View>
	</View>
	)
}

export default CollaboratorItem;