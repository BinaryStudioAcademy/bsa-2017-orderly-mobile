import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import TeamModal from './teamModal';

const hidingStyle = (popupIsShow, currentTeamId) => ({
	display: popupIsShow.isShow && currentTeamId === popupIsShow.teamId ? 'block' : 'none'
})

const NamePopup = ({ teamPopupIsShow, setTeamModal,
	                   activeModal, team, updateTeam, deleteTeam }) => (
	<View>
		<View
		      style={hidingStyle(teamPopupIsShow, team._id)}>
			<View
			           onClick={() => {
			           	setTeamModal('settings')
			}}>
				<Icon name='more vert'/>
				<View>Team settings</View>
			</View>
			<View
			           onClick={() => {
				           setTeamModal('rename')
			}}>
				<Icon name='mode edit'/>
				<View>Rename team</View>
			</View>
			<View
			           onClick={() => {
			           	setTeamModal('delete')
			}}>
				<Icon name='delete'/>
				<View>Delete team</View>
			</View>
		</View>

	</View>
)

export default NamePopup;
/*
		<TeamModal team={team}
		           currentClickedTeamId={teamPopupIsShow.teamId}
		           updateTeam={updateTeam}
		           deleteTeam={deleteTeam}
		           setTeamModal={setTeamModal}
		           activeModal={activeModal}/>
*/