import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import avatar from '../../../../../images/avatar.png';
import MemberInfo from '../memberInfo/memberInfo';
import { getRolesColor } from '../../../homePageService';
import AppConfig from '../../../../../config';

const hidingPopupStyle = (isShowUserPopup, teamId, userId) => ({
	display: isShowUserPopup[0] === teamId
			 && isShowUserPopup[1] === userId ? 'block' : 'none'
})
/*
<Image source={ collaborator.avatar ? `${AppConfig.host}/files/${collaborator.avatar}` : avatar}
onMouseOver={() => {
			       if (isShowUserPopup[0]) showUserPopup(['', ''])
			       else showUserPopup([team._id, teamUser.userId])
		       }}
		       onMouseLeave={() => {
			       showUserPopup(['', ''])
		       }}
		       avatar/>
*/
const CollaboratorItem = (team, teamUser, collaborator, showUserPopup, isShowUserPopup) => {
	if (collaborator) return (
		<View key={teamUser.userId}>
		    <Image source={avatar}/>
		    <View>
			    <MemberInfo collaborator={collaborator} />
                <View>
                    <View>

                    <View/>
                        <Text>online</Text>
                </View>

                <View>
                    <Text>{teamUser.role}</Text>
                </View>
            </View>
		</View>
	</View>
	)
}

export default CollaboratorItem;

//<View style={hidingPopupStyle(isShowUserPopup, team._id, teamUser.userId)}>

//<View style={getRolesColor(teamUser.role)}>{teamUser.role}</View>

//<View style={{backgroundColor: 'green'}}/>